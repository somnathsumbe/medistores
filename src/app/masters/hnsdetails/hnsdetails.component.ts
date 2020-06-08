import { Component, OnInit } from '@angular/core';
import { HsnListService } from '../service/hsn-list.service';

@Component({
  selector: 'app-hnsdetails',
  templateUrl: './hnsdetails.component.html',
  styleUrls: ['./hnsdetails.component.css']
})
export class HNSDetailsComponent implements OnInit {
  hsnLists = [];
  constructor(private _HsnListService: HsnListService) { }

  ngOnInit(): void {
    this.gethsnDetails();
  }
  gethsnDetails() {
    this._HsnListService.gethsnListDetails().subscribe(HsnList => {
      this.hsnLists = HsnList;
      console.log( this.hsnLists);
    })
  }

}
