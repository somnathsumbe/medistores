import { Component, OnInit } from "@angular/core";
import { LoginService } from 'src/app/login/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  gender = "Male";
  profileForm: any;
  msgState: boolean = false;
  errorMsg: string;
  constructor(private _LoginService: LoginService, private _Router: Router) { }

  ngOnInit(): void { }
  profileData(profileform: any) {
    this.profileForm = profileform.value;
    this.profileForm["loginDetails"]={ "userLoginId": profileform.form.controls.userLoginId.value };
    this._LoginService.profileForm(profileform.value).subscribe((data) => {
      data;
      if (data) {
        this.msgState=true;
        this.errorMsg = "Profile data saved successfully"
      }
    });
  }

  resetProfile(form) {
    form.value.reset('');
  }
}
