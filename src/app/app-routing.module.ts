import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { PagenotfoundComponent } from './login/pagenotfound/pagenotfound.component';
import { ForgetpasswordComponent } from './login/forgetpassword/forgetpassword.component';
import { SignupComponent } from './login/signup/signup.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
  // { path: 'loginPage', component: LoginComponent},
  { path: 'forgetPassword', component: ForgetpasswordComponent},
  { path: 'ragisterUser', component: SignupComponent},
  { path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
