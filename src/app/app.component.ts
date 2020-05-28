import { Component } from '@angular/core';
import { LoginService } from './login/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TheMedicine';
  islogin:boolean;

  constructor( private _login:LoginService){
  this.islogin=this._login.islogin;

  if(this.islogin){
    this.islogin=false;
  }
  }
}
