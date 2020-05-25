import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  loginurl = "http://192.168.0.111:8080/login";
  userRegistration = "http://192.168.0.111:8080/userRegistration";
  profilefromdata = "http://192.168.0.111:8080/updateProfile";
  constructor(public http: HttpClient) {}
  
  getLoginDetails(loginDetails) {
    return this.http.post<any>(this.loginurl, loginDetails);
  }

  ragisterUser(ragistrationUserdetails) {
    return this.http.post<any>(this.userRegistration, ragistrationUserdetails);
  }

  forgetPasswordfrom(forgetPassworddetails) {
    return this.http.post<any>(this.loginurl, forgetPassworddetails);
  }

  profilefrom(forgetPassworddetails) {
    return this.http.post<any>(this.profilefromdata, forgetPassworddetails);
  }
}
// export class LoginService {
// baseUrl: string = "http://192.168.0.104/login";
// httpOptions: any = {
// headers: new HttpHeaders({
// //'Content-Type': 'application/json',
// "Access-Control-Allow-Headers": "Content-Type",
// "Access-Control-Allow-Methods": "POST",
// "Access-Control-Allow-Origin": "*",
// }),
// };

// constructor(public http: HttpClient) {}

// getLoginDetails(loginDetails) {
// this.http.post<any>(this.baseUrl, loginDetails, {headers: this.httpOptions}).subscribe((data) => {
// return data;
// });
// }
// }
