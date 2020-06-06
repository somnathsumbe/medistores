import { Component, OnInit } from "@angular/core";

import { LoginService } from "src/app/administration/services/login.service";
import { NgForm } from "@angular/forms";
import { NgIf } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [LoginService],
})
export class LoginComponent implements OnInit {
  loginResponce: any;
  errorMsg:string;
  errorState:boolean=false;
  constructor(private _LoginService: LoginService, private _Router: Router) {}

  ngOnInit(): void {}

  loginUser = (loginForm: any) => {
    if(this._LoginService.islogin){
      this._LoginService.getLoginDetails(loginForm.value).subscribe((data) => {
        data ? this._Router.navigate(["profile"]) : this.errorState=true;
        this.errorMsg="Invalid username/password";
      });
    }
    loginForm.reset();
  };

  forgotPassword = () => this._Router.navigate(["/forgetPassword"]);

  ragisterUser = () => this._Router.navigate(["/ragisterUser"]);
}
