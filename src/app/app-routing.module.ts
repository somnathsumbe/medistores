import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './administration/login/login.component';
import { PagenotfoundComponent } from './administration/pagenotfound/pagenotfound.component';
import { ForgetpasswordComponent } from './administration/forgetpassword/forgetpassword.component';
import { SignupComponent } from './administration/signup/signup.component';
import { ProfileComponent } from './administration/profile/profile.component';
import { BankdetailsComponent } from './administration/bankdetails/bankdetails.component';
import { SalesComponent } from './masters/sales/sales.component';
import { PurchaseComponent } from './masters/purchase/purchase.component';
import { HNSDetailsComponent } from './masters/hsndetails/hnsdetails.component';
import { PartyComponent } from './masters/party/party.component';
import { ProductsComponent } from './masters/products/products.component';
import { TransportComponent } from './masters/transport/transport.component';


const routes: Routes = [
  { path: '', redirectTo:'loginPage', pathMatch:'full'},
  { path: 'loginPage', component: LoginComponent},
  { path: "profile", component: ProfileComponent},
  { path: "bankinfo", component: BankdetailsComponent},
  { path: 'forgetPassword', component: ForgetpasswordComponent},
  { path: 'ragisterUser', component: SignupComponent},
  { path: 'HSN', component: HNSDetailsComponent},
  { path:"purchase", component:PurchaseComponent, pathMatch:'full'},
  { path: "sales", component: SalesComponent },
  { path: "party", component: PartyComponent },
  { path: "products", component: ProductsComponent },
  { path: "transport", component: TransportComponent },
  // { path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
