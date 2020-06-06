import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './administration/login/login.component';
import { PagenotfoundComponent } from './administration/pagenotfound/pagenotfound.component';
import { ForgetpasswordComponent } from './administration/forgetpassword/forgetpassword.component';
import { SignupComponent } from './administration/signup/signup.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ProfileComponent } from './dashbord/profile/profile.component';
import { BankdetailsComponent } from './dashbord/bankdetails/bankdetails.component';


const routes: Routes = [
  { path: '', redirectTo:'loginPage', pathMatch:'full'},
  { path: 'loginPage', component: LoginComponent},
  // { path: 'dashbord', component: DashbordComponent},
  { path: "profile", component: ProfileComponent},
  { path: "bankinfo", component: BankdetailsComponent},
  { path: 'forgetPassword', component: ForgetpasswordComponent},
  { path: 'ragisterUser', component: SignupComponent},
  { path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
