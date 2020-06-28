import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MastersService } from 'src/app/shared/service/masters.service';
import { CustomDatePipe } from '../pipe/custom-date.pipe';
import { FilterFieldPipe } from '../pipe/filter-field.pipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  preserveWhitespaces: true
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
  orderType: any;

  constructor( 
    private formBuilder: FormBuilder, 
    private toastr: ToastrService,
    private masterService: MastersService, 
    private customDatePipe: CustomDatePipe,
    private filterFieldPipe: FilterFieldPipe,
    private activatedRoute: ActivatedRoute
    ) {
  }

  ngOnInit(): void {

    this.orderType = this.activatedRoute.snapshot.routeConfig.path;

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
        orderType:new FormControl(this.orderType, Validators.required),
        paymentMode: new FormControl(null, Validators.required),
        scheme: new FormControl(null),
        unitOfMeasure:new FormControl(""),
        customer: new FormControl(null, Validators.required),
        transportation: new FormControl(null, Validators.required)
       
    })
    this.orderForm.controls['orderType'].setValue(this.orderType);
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
    const selectedCustomer = this.filterFieldPipe.transform(customerId, this.customers, 'customerId');
    if(selectedCustomer) {
      return `<h4>Firm Name:  ${selectedCustomer.firmName}</h4><h4>Customer Name:  ${selectedCustomer.firstName} ${selectedCustomer.middleName} ${selectedCustomer.lastName}</h4>`
    }
    return '';
  }
  getProductDetails(productId) {
    const selectedProduct = this.filterFieldPipe.transform(productId, this.products, 'productId');
    if(selectedProduct) {
      return selectedProduct.productName;
    }
    return '';
  }
  getTransportDetails(transportId) {
    const selectedTransport = this.filterFieldPipe.transform(transportId, this.transports, 'transportId');
    if(selectedTransport) {
      return selectedTransport.transportName;
    }
    return '';
  }
  calculateTotalAmount() {
    let total = 0;
    let {mrp, sellRate, gstAmount, discountAmount, orderQuantity} = this.orderForm.controls;
    if(mrp != sellRate) {
      if(this.orderForm.controls['orderQuantity'].value > 1) {
        total = total * parseInt(this.orderForm.controls['orderQuantity'].value);
      }
      if(gstAmount) {
        total = parseInt(this.orderForm.controls['sellRate'].value) + parseInt(this.orderForm.controls['gstAmount'].value);
      }
      if(discountAmount) {
        total = total - parseInt(this.orderForm.controls['discountAmount'].value)
      }
     
      this.orderForm.controls['totalAmount'].setValue(total);
    }
  }
  editPageShow(order) {
    this.IsOrderView = !this.IsOrderView;
    this.orderId = order.orderId;
    this.orderForm.patchValue(order);
    this.orderForm.controls['orderDate'].setValue(this.customDatePipe.transform(order.orderDate));
    this.orderForm.controls['billDate'].setValue(this.customDatePipe.transform(order.billDate));
  } 

}
