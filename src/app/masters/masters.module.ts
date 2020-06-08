import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseComponent } from './party/purchase/purchase.component';
import { SalesComponent } from './party/sales/sales.component';
import { HNSListComponent } from './hnslist/hnslist.component';
import { HNSDetailsComponent } from './hnsdetails/hnsdetails.component';
import { PartyComponent } from './party/party.component';



@NgModule({
  declarations: [PurchaseComponent, SalesComponent,HNSListComponent, HNSDetailsComponent, PartyComponent],
  imports: [
    CommonModule
  ]
})
export class MastersModule { }
