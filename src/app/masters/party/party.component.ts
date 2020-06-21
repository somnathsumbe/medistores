import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MastersService } from 'src/app/shared/service/masters.service';
import { CustomDatePipe } from '../pipe/custom-date.pipe';
@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  partyLists = [];
  partyForm: FormGroup;
  customerId: number;
  search: string = '';
  totalRecords: string;
  page: number
  cities:[];
  bankList: [];
  IsPartyView: boolean = false;

  constructor( 
    private formBuilder: FormBuilder, 
    private toastr: ToastrService,
    private masterService: MastersService, 
    private customDatePipe: CustomDatePipe) {
  }

  ngOnInit(): void {

    // Get the city list 
    this.masterService.fetchDetails('location?pageNumber=0&maxCount=100').subscribe(cities => {
      this.cities = cities;
    });

    this.partyForm = new FormGroup({
        firmName: new FormControl(null, Validators.required),
        firstName: new FormControl(null, Validators.required),
        middleName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        address: new FormControl(null, Validators.required),
        scheme: new FormControl(null, Validators.required),
        discount:new FormControl(null, Validators.required),
        mobileNumber: new FormControl(null, Validators.required),
        emailId: new FormControl(null, Validators.required),
        faxNumber: new FormControl(null, Validators.required),
        drugLicienceNumber: new FormControl(null, Validators.required),
        drugLicienceExpDate: new FormControl(null, Validators.required),
        gstnNumber:new FormControl(null, Validators.required),
        foodLicienceNo: new FormControl(null, Validators.required),
        panNumber: new FormControl(null, Validators.required),
        isActive:new FormControl(null, Validators.required),
        customerType: new FormControl(null, Validators.required),
        bankId: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        customerId: new FormControl(null)
    })
  }

  addEditPartyDetails(partyForm) {
    this.masterService.addEditDetails('customer',partyForm.value).subscribe(res => {
      if (res) {
        this.showPartyView();
        this.partyForm.reset(this.partyForm.value);
        this.toastr.success('Customer Information Save Successfully..!');
        this.partyForm.reset();
      } else {
        this.toastr.error('Error occurred');
      }
    });
  }

  showPartyView(){
    this.IsPartyView = !this.IsPartyView;
    this.masterService.fetchDetails('customer').subscribe(parties => {
      this.partyLists = parties;
    });
  } 
  editPageShow(party) {
    this.IsPartyView = !this.IsPartyView;
    this.customerId = party.customerId;
    this.partyForm.patchValue(party);
    this.partyForm.controls['drugLicienceExpDate'].setValue(this.customDatePipe.transform(party.drugLicienceExpDate));
    //this.partyForm.controls['isActive'].setValue(party.isActive);
  } 

}

