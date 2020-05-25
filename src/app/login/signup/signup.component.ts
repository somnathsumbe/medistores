import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { LoginService } from "src/app/login/services/login.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
  providers: [LoginService],
})
export class SignupComponent implements OnInit {
  userType: string = "Dealer";
  loginResponce: any;
  constructor(private _Router: Router, private _LoginService: LoginService) {}

  ngOnInit(): void {}

  loginPage = () => this._Router.navigate([""]);

  ragisterForm(ragisterFormdata: any) {
    console.log(ragisterFormdata.form.value);
    debugger;
    this._LoginService.ragisterUser(ragisterFormdata.value).subscribe(data=>{
      data;
    });
    // this.loginResponce
    //   ? alert("Login Successful")
    //   : alert("Invalid username/password");
    ragisterFormdata.reset({
      userType: "Dealer",
    });
  }
}
