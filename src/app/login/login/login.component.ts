import { Component, OnInit } from "@angular/core";

import { LoginService } from "src/app/login/services/login.service";
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
  constructor(private _LoginService: LoginService, private _Router: Router) {}

  ngOnInit(): void {}

  loginUser = (loginForm: any) => {
    this.loginResponce = this._LoginService.getLoginDetails(loginForm.value);
    this.loginResponce
      ? alert("Login Successful")
      : alert("Invalid username/password");

    if (this.loginResponce) {
      this._Router.navigate(["dashbord"]);
    }
    loginForm.reset();
  };

  forgotPassword = () => this._Router.navigate(["/forgetPassword"]);

  ragisterUser = () => this._Router.navigate(["/ragisterUser"]);
}
