import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MastersService } from 'src/app/shared/service/masters.service';
@Component({
  selector: 'app-hnsdetails',
  templateUrl: './hnsdetails.component.html',
  styleUrls: ['./hnsdetails.component.css'],
  preserveWhitespaces: true
})

export class HNSDetailsComponent implements OnInit {
  hsnLists = [];
  hsnForm: FormGroup;
  code: number;
  search: string = '';
  totalRecords: string;
  page: number;
  hsnid:boolean;

  constructor( 
    private formBuilder: FormBuilder, 
    private toastr: ToastrService,
    private masterService: MastersService) {
  }

  ngOnInit(): void {
    this.gethsnDetails();
    this.hsnForm =this.formBuilder.group({
      code:['',Validators.required],
      value:[''],
      hsnid:[''],

    });
  }

  gethsnDetails() {
    this.masterService.fetchDetails('/master/hsn').subscribe(HsnList => {
      debugger;
      this.hsnLists = HsnList;
      this.totalRecords = HsnList.length;
    })
  }

  addEditHSNDetails(hsnForm: any) {;
    this.masterService.addEditDetails('/master/hsn', hsnForm.value).subscribe((res) => {
      if (res) {
        this.gethsnDetails();
        this.hsnForm.reset(this.hsnForm.value);
        this.toastr.success('HSN Details Data Save Successfully');
        hsnForm.reset();
      } else {
        this.toastr.error('error occurred');
      }
    })
  }




  editHsnDetails(hsnList) {
    this.code= hsnList.code;
    this.hsnForm.patchValue(hsnList);
  }
}
