import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseComponent } from './party/purchase/purchase.component';
import { SalesComponent } from './party/sales/sales.component';
import { HNSListComponent } from './hnslist/hnslist.component';
import { HNSDetailsComponent } from './hnsdetails/hnsdetails.component';
import { PartyComponent } from './party/party.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [PurchaseComponent, SalesComponent,HNSListComponent, HNSDetailsComponent, PartyComponent, ProductComponent],
  imports: [
    CommonModule
  ]
})
export class MastersModule { }
