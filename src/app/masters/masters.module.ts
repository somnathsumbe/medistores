import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseComponent } from './party/purchase/purchase.component';
import { SalesComponent } from './party/sales/sales.component';
import { HNSListComponent } from './hnslist/hnslist.component';
import { HNSDetailsComponent } from './hnsdetails/hnsdetails.component';



@NgModule({
  declarations: [PurchaseComponent, SalesComponent,HNSListComponent, HNSDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class MastersModule { }
