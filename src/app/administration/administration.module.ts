import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HNSListComponent } from './hnslist/hnslist.component';
import { HNSDetailsComponent } from './hnsdetails/hnsdetails.component';
import { ProfileComponent } from './profile/profile.component';
import { BankdetailsComponent } from './bankdetails/bankdetails.component';





@NgModule({
  declarations: [HNSListComponent, HNSDetailsComponent,ProfileComponent,    BankdetailsComponent],
  imports: [
    CommonModule,    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdministrationModule { }
