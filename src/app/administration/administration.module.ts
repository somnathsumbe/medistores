import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { BankdetailsComponent } from './bankdetails/bankdetails.component';





@NgModule({
  declarations: [ProfileComponent,    BankdetailsComponent],
  imports: [
    CommonModule,    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdministrationModule { }
