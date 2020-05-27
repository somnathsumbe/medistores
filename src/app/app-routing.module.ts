import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { PagenotfoundComponent } from './login/pagenotfound/pagenotfound.component';
import { ForgetpasswordComponent } from './login/forgetpassword/forgetpassword.component';
import { SignupComponent } from './login/signup/signup.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ProfileComponent } from './dashbord/profile/profile.component';
import { BankdetailsComponent } from './dashbord/bankdetails/bankdetails.component';


const routes: Routes = [
  { path: '', component: DashbordComponent},
  // { path: 'loginPage', component: LoginComponent},
  // {
  //   path: "dashbord",
  //   children: [
  //     { path: "", component: DashbordComponent, pathMatch: "full" },
  //     {
  //       path: "profile",
  //       children: [
  //         { path: "", component: ProfileComponent, pathMatch: "full" },
  //       ],
  //     },

  //   ],
  // },

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
