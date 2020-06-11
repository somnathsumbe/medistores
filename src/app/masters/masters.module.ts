import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseComponent } from './purchase/purchase.component';
import { SalesComponent } from './sales/sales.component';
import { HNSDetailsComponent } from './hsndetails/hnsdetails.component';
import { PartyComponent } from './party/party.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { TransportComponent } from './transport/transport.component';
import { SearchFilterPipe } from './pipe/search-filter.pipe';


@NgModule({
  declarations: [PurchaseComponent, SalesComponent, HNSDetailsComponent, PartyComponent, ProductComponent,TransportComponent, SearchFilterPipe],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule 
  ]
})

export class MastersModule { }
