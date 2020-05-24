import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _Router:Router) { }

  ngOnInit(): void {
  }

  loginPage=()=>this._Router.navigate(['']);
  


}
