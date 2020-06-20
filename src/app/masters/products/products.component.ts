import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MastersService } from 'src/app/shared/service/masters.service';
@Component({
  selector: 'app-products',
  templateUrl:'./products.component.html',
  styleUrls: ['./products.component.css'],
  preserveWhitespaces:true
})
export class ProductsComponent implements OnInit {
  productLists = [];
  productsForm: FormGroup;
  partyId: number;
  search: string = '';
  totalRecords: string;
  page: number;
  productPage:boolean=true;
  constructor(private masterService: MastersService, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.gethsnDetails();
    this.productsForm = new FormGroup({
      categoryId: new FormControl(null,Validators.required),
      productName: new FormControl(null,Validators.required),
      description: new FormControl(null),
      scientificName: new FormControl(null),
      batchNumber: new FormControl(null,Validators.required),
      manufacturer: new FormControl(null,Validators.required),
      drugGroup: new FormControl(null,Validators.required),
      unitOfMeasure: new FormControl(null,Validators.required),
      drugContent: new FormControl(null,Validators.required),
      packingDescription: new FormControl(null),
      hsnId: new FormControl(null,Validators.required),
      minSaleQuantity: new FormControl(null),
      maxSaleQuantity: new FormControl(null),
      isReplacement: new FormControl(1),
      isDiscountAllow: new FormControl(0),
      calculateOn: new FormControl(null),
      saleRateMethod: new FormControl(null),
      isDpcoProduct: new FormControl(0),
      partyId: new FormControl()
    });
  }

  gethsnDetails() {
    this.masterService.fetchDetails('productList').subscribe(ProductList => {
     debugger;
      this.productLists = ProductList;
      this.totalRecords = ProductList.length;
    })
  }

  addEditHSNDetails(productsForm: any) {
console.log(productsForm.value)
    this.masterService.addEditDetails('saveProduct', productsForm.value).subscribe((res) => {
      if (res) {
        this.gethsnDetails();
        this.productsForm.reset(this.productsForm.value);
        this.toastr.success('Products Data Save Successfully');
        productsForm.reset();
      } else {
        this.toastr.error('error occurred');
      }
    })
  }



  productPageShow=()=>this.productPage=false;
  editPageShow=(productsForm)=>{

    this.productPage=!this.productPage;

    this.partyId = productsForm.partyId;
    this.productsForm.controls['productName'].setValue(productsForm.productName);
    // this.productsForm.controls['hsnCategory'].setValue(hsnList.hsnCategory);
    // this.productsForm.controls['description'].setValue(hsnList.description);




}

}
