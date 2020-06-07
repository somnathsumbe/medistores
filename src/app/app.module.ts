import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './administration/login/login.component';
import { HeaderComponent } from './administration/header/header.component';
import { FooterComponent } from './administration/footer/footer.component';
import { ForgetpasswordComponent } from './administration/forgetpassword/forgetpassword.component';
import { SignupComponent } from './administration/signup/signup.component';
import { PagenotfoundComponent } from './administration/pagenotfound/pagenotfound.component';
import { SidebarComponent } from './administration/sidebar/sidebar.component';
import { AdministrationModule } from './administration/administration.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ForgetpasswordComponent,
    SignupComponent,
    PagenotfoundComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdministrationModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
