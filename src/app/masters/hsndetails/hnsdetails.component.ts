import { Component, OnInit } from '@angular/core';
import { HsnListService } from '../service/hsn-list.service';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-hnsdetails',
  templateUrl: './hnsdetails.component.html',
  styleUrls: ['./hnsdetails.component.css'],
  preserveWhitespaces: true
})
export class HNSDetailsComponent implements OnInit {
  hsnLists = [];
  hsnForm: FormGroup;
  hsnid: number;
  search: string = '';
  totalRecords: string;
  page: number

  constructor(private _HsnListService: HsnListService, private formBuilder: FormBuilder, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.gethsnDetails();
    this.hsnForm = new FormGroup({
      hsnCategory: new FormControl(null, Validators.required),
      description: new FormControl(null),
      hsnId: new FormControl(null)
    });
  }

  gethsnDetails() {
    debugger;
    this._HsnListService.gethsnListDetails().subscribe(HsnList => {
      this.hsnLists = HsnList;
      this.totalRecords = HsnList.length;
    })
  }

  hsnDetailsData(hsnForm: any) {
    console.log(hsnForm.controls);
    this._HsnListService.PosthsnListDetails(hsnForm.value).subscribe((res) => {
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
    this.hsnid = hsnList.hsnId;
    this.hsnForm.controls['hsnId'].setValue(hsnList.hsnId);
    this.hsnForm.controls['hsnCategory'].setValue(hsnList.hsnCategory);
    this.hsnForm.controls['description'].setValue(hsnList.description);
  }

}
