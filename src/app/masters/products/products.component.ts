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
  productId: number;
  search: string = '';
  totalRecords: string;
  page: number;
  productPage:boolean=true;
  editupdate:boolean=false;
  constructor(private masterService: MastersService, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.gethsnDetails();
    this.productsForm = this.formBuilder.group({
      productId:[],
      productName:["",Validators.required],
      description:[""],
      scientificName:[""],
      batchNumber:["",Validators.required],
      mrp:[],
      sellRate:[],
      manufacturer:["",Validators.required],
      manufactureDate:[""],
      expiryDate:[""],
      drugContent:["",Validators.required],
      packingDescription:[""],
      isReplacement:[1],
      isDiscountAllow:[0],
      isDpcoProduct:[0],
      availableQuantity:[],
      minSaleQuantity:[],
      maxSaleQuantity:[],
      drugGroup:["",Validators.required],
      unitOfMeasure:[0,Validators.required],
      categoryId:["",Validators.required],
      calculateOn:[""],
      saleRateMethod:[""],
      hsn:["",Validators.required],
    });
  }

  gethsnDetails() {
    this.masterService.fetchDetails('product').subscribe(ProductList => {
      this.productLists = ProductList;
      this.totalRecords = ProductList.length;
    })
  }

  addProuct(productsForm:any) {
    debugger;
    this.masterService.addEditDetails('product', productsForm.value).subscribe((res) => {
      if (res) {
        this.gethsnDetails();
        this.productsForm.reset(this.productsForm.value);
        this.toastr.success('Products Data Save Successfully');
        productsForm.reset();
        this.editupdate=false;
      } else {
        this.toastr.error('error occurred');
      }
    })
  }

  productPageShow=()=>this.productPage=false;
  
  backtopage=()=>this.productPage=true;
 
  editPageShow=(product)=>{
    this.editupdate=true;
    this.productPage=!this.productPage;
    this.productId= product.productId;
    this.productsForm.patchValue(product);
}

resetdata=()=>this.productsForm.reset();

}
