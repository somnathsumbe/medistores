import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './administration/login/login.component';
import { HeaderComponent } from './masters/header/header.component';
import { FooterComponent } from './administration/footer/footer.component';
import { ForgetpasswordComponent } from './administration/forgetpassword/forgetpassword.component';
import { SignupComponent } from './administration/signup/signup.component';
import { PagenotfoundComponent } from './administration/pagenotfound/pagenotfound.component';
import { SidebarComponent } from './administration/sidebar/sidebar.component';
import { AdministrationModule } from './administration/administration.module';
import { MastersModule } from './masters/masters.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ForgetpasswordComponent,
    SignupComponent,
    PagenotfoundComponent,
    SidebarComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdministrationModule,
    MastersModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    LoadingBarRouterModule,
    LoadingBarModule

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
