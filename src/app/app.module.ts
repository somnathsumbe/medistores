import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { HeaderComponent } from './login/header/header.component';
import { FooterComponent } from './login/footer/footer.component';
import { ForgetpasswordComponent } from './login/forgetpassword/forgetpassword.component';
import { SignupComponent } from './login/signup/signup.component';
import { PagenotfoundComponent } from './login/pagenotfound/pagenotfound.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SidebarComponent } from './login/sidebar/sidebar.component';
import { ProfileComponent } from './dashbord/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ForgetpasswordComponent,
    SignupComponent,
    PagenotfoundComponent,
    DashbordComponent,
    SidebarComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
