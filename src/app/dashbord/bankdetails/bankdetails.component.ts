import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/login/services/login.service";

@Component({
  selector: "app-bankdetails",
  templateUrl: "./bankdetails.component.html",
  styleUrls: ["./bankdetails.component.css"],
})
export class BankdetailsComponent implements OnInit {
  Banks: string[] = [
    "Allahabad Bank",
    "Andhra Bank",
    "Bank of India",
    "Bank of Baroda",
    "Bank of Maharashtra",
    "Canara Bank",
    "Central Bank of India",
    "Corporation Bank",
    "Dena Bank",
    "Indian Bank",
    "Indian Overseas Bank",
    "IDBI Bank",
    "Oriental Bank of Commerce",
    "Punjab & Sindh Bank",
    "Punjab National Bank",
    "State Bank of India",
    "Syndicate Bank",
    "UCO Bank",
    "Union Bank of India",
    "United Bank of India",
    "Vijaya Bank",
  ];
  Cityes: any[] = [];
  bankForm;
  msgState:boolean;
  errorMsg:string;
  constructor(private _login: LoginService) { }
  ngOnInit(): void {
    this.getBankData();
    this.getCityData();
  }


  getBankData() {
    //   this._login.bankDetailsList().subscribe(data =>{
    //    this.Banks=data;
    //    console.log(this.Banks);
    //  })
  }
  getCityData() {
    this._login.AllBankList().subscribe(city => {
      this.Cityes = city;
    })
  }

  bankDetailsData(bankform: any) {
    this.bankForm=bankform.value;
    this.bankForm["city"] = {"cityId" : bankform.form.controls.cityId.value};
    this._login.saveBankDetails(this.bankForm).subscribe((bankdata)=>{
      bankdata;
      if (bankdata) {
        this.msgState=true;
        this.errorMsg = "Banks Details  saved successfully"
      }
    })
  }
}
