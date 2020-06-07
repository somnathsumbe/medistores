import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './administration/login/login.component';
import { PagenotfoundComponent } from './administration/pagenotfound/pagenotfound.component';
import { ForgetpasswordComponent } from './administration/forgetpassword/forgetpassword.component';
import { SignupComponent } from './administration/signup/signup.component';
import { ProfileComponent } from './administration/profile/profile.component';
import { BankdetailsComponent } from './administration/bankdetails/bankdetails.component';
import { HNSDetailsComponent } from './administration/hnsdetails/hnsdetails.component';
import { HNSListComponent } from './administration/hnslist/hnslist.component';


const routes: Routes = [
  { path: '', redirectTo:'loginPage', pathMatch:'full'},
  { path: 'loginPage', component: LoginComponent},
  { path: "profile", component: ProfileComponent},
  { path: "bankinfo", component: BankdetailsComponent},
  { path: 'forgetPassword', component: ForgetpasswordComponent},
  { path: 'ragisterUser', component: SignupComponent},

  { path: 'HSNlist', component: HNSListComponent},
  { path: 'HSNdetails', component: HNSDetailsComponent},
  { path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
