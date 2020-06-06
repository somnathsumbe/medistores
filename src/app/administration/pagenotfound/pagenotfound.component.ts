import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  constructor(private _Router:Router) { }

  ngOnInit(): void {
  }
  loginPage=()=>this._Router.navigate(['']);

  dashbordPage=()=>this._Router.navigate(['dashbord']);
}
