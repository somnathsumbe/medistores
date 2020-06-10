import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './administration/login/login.component';
import { PagenotfoundComponent } from './administration/pagenotfound/pagenotfound.component';
import { ForgetpasswordComponent } from './administration/forgetpassword/forgetpassword.component';
import { SignupComponent } from './administration/signup/signup.component';
import { ProfileComponent } from './administration/profile/profile.component';
import { BankdetailsComponent } from './administration/bankdetails/bankdetails.component';
import { SalesComponent } from './masters/party/sales/sales.component';
import { PurchaseComponent } from './masters/party/purchase/purchase.component';
import { HNSDetailsComponent } from './masters/hnsdetails/hnsdetails.component';


const routes: Routes = [
  { path: '', redirectTo:'loginPage', pathMatch:'full'},
  { path: 'loginPage', component: LoginComponent},
  { path: "profile", component: ProfileComponent},
  { path: "bankinfo", component: BankdetailsComponent},
  { path: 'forgetPassword', component: ForgetpasswordComponent},
  { path: 'ragisterUser', component: SignupComponent},
  { path: 'HSNdetails', component: HNSDetailsComponent},
  { path:"party/purchase", component:PurchaseComponent, pathMatch:'full'},
  { path: "party/sales", component: SalesComponent },
  { path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
