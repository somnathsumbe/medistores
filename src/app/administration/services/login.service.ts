import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})

export class LoginService {
  loginurl = "http://192.168.0.100:8080/medistores/login";
  userRegistration = "http://192.168.0.100:8080/medistores/userRegistration";
  profilefromdata = "http://192.168.0.100:8080/medistores/updateProfile";
  bankdetalsdata = "http://192.168.0.100:8080/medistores/saveBankDetails";
  bankList='http://192.168.0.100:8080/medistores/cityList';
  islogin:boolean=true;
  constructor(public http: HttpClient) {}
  
  getLoginDetails(loginDetails) {
    return this.http.post<any>(this.loginurl, loginDetails);
  }

  ragisterUser(ragisterUserdetails) {
    return this.http.post<any>(this.userRegistration, ragisterUserdetails);
  }

  forgetPasswordform(forgetPassworddetails) {

    return this.http.post<any>(this.loginurl, forgetPassworddetails);
  }

  profileForm(profiledetails) {
    return this.http.post<any>(this.profilefromdata, profiledetails);
  }
  bankDetailsForm(bankDetailsddetails) {
    return this.http.post<any>(this.profilefromdata, bankDetailsddetails);
  }
  AllBankList() {
    return this.http.get<any>(this.bankList);
  }

  saveBankDetails(bankDetailsData) {
    debugger;
    return this.http.post<any>(this.bankdetalsdata,bankDetailsData);
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
