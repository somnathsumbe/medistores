import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { LoginService } from "src/app/administration/services/login.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
  providers: [LoginService],
})
export class SignupComponent implements OnInit {
  userType: string = "Dealer";
  loginResponce: any;
  errorMsg: string;
  errorValid: boolean = false;
  errorNotValid:boolean=false;
  msgState:boolean=false;
  constructor(private _Router: Router, private _LoginService: LoginService) { }

  ngOnInit(): void { }

  loginPage = () => this._Router.navigate([""]);

  ragisterForm(ragisterFormdata: any) {

    this._LoginService.ragisterUser(ragisterFormdata.value).subscribe(data => {
      if (data) {
        this.errorValid=data;
        this.msgState = true;
        this.errorMsg = "Registration Successful! It will redirect to login page ";
        setTimeout(() => {
          this._Router.navigate(["loginPage"]);
        }, 3000);
      }
      else {
        this.errorValid=data;
        this.msgState = true;
        this.errorMsg = "Mobile Number is already  exist";
      }
      ragisterFormdata.reset({
        userType: "Dealer",
      });
    });
  }
}
