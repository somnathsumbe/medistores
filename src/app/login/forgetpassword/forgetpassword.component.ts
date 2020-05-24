import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../services/login.service";

@Component({
  selector: "app-forgetpassword",
  templateUrl: "./forgetpassword.component.html",
  styleUrls: ["./forgetpassword.component.css"],
  providers: [LoginService],
})
export class ForgetpasswordComponent implements OnInit {
  loginResponce;
  constructor(private _Router: Router, private _LoginService: LoginService) {}

  ngOnInit(): void {}

  loginPage = () => this._Router.navigate([""]);

  forgetPasswordData(forgetPassword: any) {
    this.loginResponce = this._LoginService.getLoginDetails(
      forgetPassword.value
    );
    this.loginResponce
      ? alert("Login Successful")
      : alert("Invalid username/password");
    forgetPassword.reset();
  }
}
