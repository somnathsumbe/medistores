import { Component, OnInit } from '@angular/core';
import { HsnListService } from '../service/hsn-list.service';
import{FormGroup, FormControl, FormBuilder,NgForm, Validators} from '@angular/forms'

@Component({
  selector: 'app-hnsdetails',
  templateUrl: './hnsdetails.component.html',
  styleUrls: ['./hnsdetails.component.css']
})
export class HNSDetailsComponent implements OnInit{
  hsnLists = [];

  message: string;
  messageState:boolean;
  hsnForm:FormGroup;

  constructor(private _HsnListService: HsnListService, private formBuilder:FormBuilder ) { 

  }

  ngOnInit(): void {
    this.gethsnDetails();
    this.hsnForm=new FormGroup({
      hsnCategory: new FormControl(null,Validators.required),
      description: new FormControl(null,Validators.required)
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
      if ( res) {
        this.gethsnDetails();
        this.messageState=true;
        this.message = "HSN Details Data Save Successfully";
        this.hsnForm.reset(this.hsnForm.value);
  
      } else {
        this.messageState=false;
        this.message = "error occurred ";
      }
    })

   
 
  }
  // editHsnDetails( hsnItem){
  //   debugger;
  //  // console.log(hsnListform.value);
  //   this.hsndetails.nativeElement.querySelector('#hsnCategory').value = hsnItem.hsnCategory;
  //   this.hsndetails.nativeElement.querySelector('#description').value = hsnItem.description;
  // }


}
