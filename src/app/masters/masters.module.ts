import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseComponent } from './party/purchase/purchase.component';
import { SalesComponent } from './party/sales/sales.component';
import { HNSDetailsComponent } from './hnsdetails/hnsdetails.component';
import { PartyComponent } from './party/party.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PurchaseComponent, SalesComponent, HNSDetailsComponent, PartyComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MastersModule { }
