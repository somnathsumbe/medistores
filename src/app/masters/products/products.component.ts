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
  hsnLists = [];
  productsForm: FormGroup;
  hsnid: number;
  search: string = '';
  totalRecords: string;
  page: number;
  constructor(private masterService: MastersService, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.gethsnDetails();
    this.productsForm = new FormGroup({
      //categoryId: new FormControl(null, Validators.required),
      categoryId: new FormControl(null,Validators.required),
      partyId: new FormControl(null),
      productName: new FormControl(null),
      description: new FormControl(null),
      scientificName: new FormControl(null),
      batchNumber: new FormControl(null),
      manufacturer: new FormControl(null),
      drugGroup: new FormControl(null),
      unitOfMeasure: new FormControl(null),
      drugContent: new FormControl(null),
      packingDescription: new FormControl(null),
      hsnId: new FormControl(null),
      minSaleQuantity: new FormControl(null),
      maxSaleQuantity: new FormControl(null),
      isReplacement: new FormControl(1),
      isDiscountAllow: new FormControl(1),
      calculateOn: new FormControl(null),
      saleRateMethod: new FormControl(null),
      isDpcoProduct: new FormControl(1)
    });
  }

  gethsnDetails() {
    this.masterService.fetchDetails('hsnList').subscribe(HsnList => {
      this.hsnLists = HsnList;
      this.totalRecords = HsnList.length;
    })
  }

  addEditHSNDetails(productsForm: any) {
console.log(productsForm.value)
    this.masterService.addEditDetails('saveProduct', productsForm.value).subscribe((res) => {
      if (false) {
        this.gethsnDetails();
        this.productsForm.reset(this.productsForm.value);
        this.toastr.success('HSN Details Data Save Successfully');
        productsForm.reset();
      } else {
        this.toastr.error('error occurred');
      }
    })
  }

  editHsnDetails(hsnList) {
    this.hsnid = hsnList.hsnId;
    this.productsForm.controls['hsnId'].setValue(hsnList.hsnId);
    this.productsForm.controls['hsnCategory'].setValue(hsnList.hsnCategory);
    this.productsForm.controls['description'].setValue(hsnList.description);
  }

}
