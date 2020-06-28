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
import {NgxPaginationModule} from 'ngx-pagination';
import { ReadmorePipe } from './pipe/readmore.pipe';
import { CustomDatePipe } from './pipe/custom-date.pipe';



@NgModule({
  declarations: [PurchaseComponent, SalesComponent, 
    HNSDetailsComponent, PartyComponent, ProductsComponent,TransportComponent, SearchFilterPipe,
    ReadmorePipe,
    CustomDatePipe
  ],


  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule ,
    NgxPaginationModule
  ],
  providers:[CustomDatePipe]   
})

export class MastersModule { }
