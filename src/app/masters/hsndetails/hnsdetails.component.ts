import { Component, OnInit } from '@angular/core';
import { HsnListService } from '../service/hsn-list.service';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-hnsdetails',
  templateUrl: './hnsdetails.component.html',
  styleUrls: ['./hnsdetails.component.css'],
  preserveWhitespaces:true
})
export class HNSDetailsComponent implements OnInit {
  hsnLists = [];
  message: string;
  messageState: boolean;
  hsnForm: FormGroup;
  hsnid: number;
  childValue:string;
  search:string='';


  constructor(private _HsnListService: HsnListService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.gethsnDetails();
    this.hsnForm = new FormGroup({
      hsnCategory: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      hsnId: new FormControl(null)
    });

  }


  gethsnDetails() {
    this._HsnListService.gethsnListDetails().subscribe(HsnList => {
      this.hsnLists = HsnList;
    })
  }

  hsnDetailsData(hsnForm: any) {
    console.log(hsnForm.controls);
    this._HsnListService.PosthsnListDetails(hsnForm.value).subscribe((res) => {
      if (res) {
        this.gethsnDetails();
        this.messageState = true;
        this.message = "HSN Details Data Save Successfully";
        this.hsnForm.reset(this.hsnForm.value);

      } else {
        this.messageState = false;
        this.message = "error occurred ";
      }
    })
  }
  editHsnDetails(hsnList) {
    this.hsnid = hsnList.hsnId;
    this.hsnForm.controls['hsnId'].setValue(hsnList.hsnId);
    this.hsnForm.controls['hsnCategory'].setValue(hsnList.hsnCategory);
    this.hsnForm.controls['description'].setValue(hsnList.description);
  }

  // childFilter(value) {
  //  this.childValue=value;
  // }

  // childAsending() {
  //   alert("childAsending");
  // }
  // childDsending() {
  //   alert("childDsending");
  // }
}
