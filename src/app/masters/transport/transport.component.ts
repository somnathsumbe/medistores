import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MastersService } from 'src/app/shared/service/masters.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css'],
  preserveWhitespaces:true
})
export class TransportComponent implements OnInit {

  transsportLists = [];
  addTransportDetails: FormGroup;
  search: string = '';
  totalRecords: string;
  page: number;
  cityList:[];
  transportId;
  editupdate:boolean;

  constructor( 
    private formBuilder: FormBuilder, 
    private toastr: ToastrService,
    private masterService: MastersService) {
  }

  ngOnInit(): void {
    this.getCityList();
    this.gethsnDetails();
    this.addTransportDetails =this.formBuilder.group({
      transportId:[],
      cityId:[],
      transportName:['',Validators.required],
      address:[''],
      transportType:[''],
    });
  }

  getCityList(){
    this.masterService.fetchDetails('/location').subscribe(CityList => {
      this.cityList = CityList;
    })
  }

  gethsnDetails() {
    this.masterService.fetchDetails('/transport').subscribe(HsnList => {
      this.transsportLists = HsnList;
      this.totalRecords = HsnList.length;
    })
  }

  transportDetails(Form: any) {
    this.masterService.addEditDetails('/transport', Form.value).subscribe((res) => {
      if (res) {
        this.gethsnDetails();
        this.addTransportDetails.reset(this.addTransportDetails.value);
        this.toastr.success('Transport Data Save Successfully');
        Form.reset();
        this.editupdate=false;
      } else {
        this.toastr.error('error occurred');
      }
    })
  }

  editHsnDetails(hsnList) {
    this.editupdate=true;
    this.transportId= hsnList.transportId;
    this.addTransportDetails.patchValue(hsnList);
  }

  resetdata=()=>this.addTransportDetails.reset();
}
