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
  profileForm:any;
  constructor(private _LoginService:LoginService, private _Router:Router) {}

  ngOnInit(): void {}
  profileData(profileform: any) {
    this.profileForm=profileform.value;
   this._LoginService.getLoginDetails(profileform.value).subscribe((data) => {
      data;
      if (data) {
        alert("Profile Data Store Successfully");

      }
    });
  }

  resetProfile(form){
    form.value.reset('');
}
}
