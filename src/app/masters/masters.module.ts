import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PurchaseComponent } from './party/purchase/purchase.component';
import { SalesComponent } from './party/sales/sales.component';
import { HNSDetailsComponent } from './hnsdetails/hnsdetails.component';
import { PartyComponent } from './party/party.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [PurchaseComponent, SalesComponent, HNSDetailsComponent, PartyComponent, ProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MastersModule { }
