import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
loginurl="http://192.168.0.104/login";

  constructor(public http:HttpClient) { }

  getLoginDetails(loginDetails){
   this.http.post<any>(this.loginurl,loginDetails ).subscribe(data => {
    return data;
})
  }
}
