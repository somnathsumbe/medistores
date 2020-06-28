import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MastersService } from 'src/app/shared/service/masters.service';
import { CustomDatePipe } from '../pipe/custom-date.pipe';
import { FilterFieldPipe } from '../pipe/filter-field.pipe';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  IsPurchaseRoute: boolean = false;
  orders = [];
  orderForm: FormGroup;
  orderId: number;
  search: string;
  totalRecords: string;
  page: number
  products:[];
  transports: [];
  customers: [];
  IsOrderView: boolean = false;

  constructor( 
    private formBuilder: FormBuilder, 
    private toastr: ToastrService,
    private masterService: MastersService, 
    private customDatePipe: CustomDatePipe,
    private filterFieldPipe: FilterFieldPipe) {
  }

  ngOnInit(): void {

    // Get the products list 
    this.masterService.fetchDetails('product').subscribe(products => {
      this.products = products;
    });

    this.masterService.fetchDetails('transport').subscribe(transports => {
      this.transports = transports;
    });

    this.masterService.fetchDetails('customer').subscribe(customers => {
      this.customers = customers;
    });

    this.orderForm = new FormGroup({
        orderId: new FormControl(null, ),
        orderDate: new FormControl(null, Validators.required),
        billNumber: new FormControl(null, Validators.required),
        billDate: new FormControl(null, Validators.required),
        productId: new FormControl(null, Validators.required),
        orderQuantity: new FormControl(null),
        mrp:new FormControl(null, Validators.required),
        sellRate: new FormControl(null, Validators.required),
        gstAmount: new FormControl(null, Validators.required),
        discountAmount: new FormControl(null),
        totalAmount: new FormControl(null, Validators.required),
        orderAddress: new FormControl(null, Validators.required),
        orderType:new FormControl(null, Validators.required),
        paymentMode: new FormControl(null, Validators.required),
        scheme: new FormControl(null),
        unitOfMeasure:new FormControl(""),
        customer: new FormControl(null, Validators.required),
        transportation: new FormControl(null, Validators.required)
       
    })
  }

  addEditOrderDetails(orderForm) {
    this.masterService.addEditDetails('order',orderForm.value).subscribe(res => {
      if (res) {
        this.showOrderView();
        this.orderForm.reset(this.orderForm.value);
        this.toastr.success('Order Information Save Successfully..!');
        this.orderForm.reset();
      } else {
        this.toastr.error('Error occurred');
      }
    });
  }

  showOrderView(){
    this.IsOrderView = !this.IsOrderView;
    this.masterService.fetchDetails('order').subscribe(orders => {
      this.orders = orders;
    });
  } 

  getCustomerDetails(customerId) {
    const selectedCustomer = this.filterFieldPipe.transform(customerId, this.customers);
    if(selectedCustomer) {
      return `Firm Name:${selectedCustomer.firmName}<br/>Customer Name: ${selectedCustomer.firstName} ${selectedCustomer.middleName} ${selectedCustomer.lastName}`
    }
    return '';
  }
  getProductDetails(productId) {
    const selectedProduct = this.filterFieldPipe.transform(productId, this.products);
    if(selectedProduct) {
      return selectedProduct.productName;
    }
    return '';
  }
  getTransportDetails(transportId) {
    const selectedTransport = this.filterFieldPipe.transform(transportId, this.transports);
    if(selectedTransport) {
      return selectedTransport.transportName;
    }
    return '';
  }
  calculateTotalAmount() {
    let total = 0;
    let {mrp, sellRate, gstAmount, discountAmount, orderQuantity} = this.orderForm.controls;
    if(mrp != sellRate) {
      if(gstAmount) {
        total = parseInt(this.orderForm.controls['sellRate'].value) + parseInt(this.orderForm.controls['gstAmount'].value);
      }
      if(discountAmount) {
        total = total - parseInt(this.orderForm.controls['discountAmount'].value)
      }
      if(this.orderForm.controls['orderQuantity'].value > 1) {
        total = total * parseInt(this.orderForm.controls['orderQuantity'].value);
      }
      this.orderForm.controls['totalAmount'].setValue(total);
    }
  }
  editPageShow(order) {
    this.IsOrderView = !this.IsOrderView;
    this.orderId = order.orderId;
    this.orderForm.patchValue(order);
    this.orderForm.controls['orderDate'].setValue(this.customDatePipe.transform(order.orderDate));
    //this.orderForm.controls['isActive'].setValue(order.isActive);
  } 

}
