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

  Cityes: string[] = [
    "Mumbai",
    "Pune",
    "Nagpur",
    "Thane",
    "Pimpri-Chinchwad",
    "Nashik",
    "Kalyan-Dombivli",
    "Vasai-Virar City MC",
    "Aurangabad",
    "Navi Mumbai",
    "Solapur",
    "Mira-Bhayandar",
    "Bhiwandi-Nizampur MC",
    "Amravati",
    "Nanded Waghala",
    "Kolhapur",
    "Ulhasnagar",
    "Sangli-Miraj-Kupwad",
    "Malegaon",
    "Jalgaon",
    "Akola",
    "Latur",
    "Dhule",
    "Ahmednagar",
    "Chandrapur",
    "Parbhani",
    "Ichalkaranji",
    "Jalna",
    "Ambarnath",
    "Bhusawal",
    "Panvel",
    "Ratnagiri",
    "Beed",
    "Gondia",
    "Satara",
    "Barshi",
    "Yavatmal",
    "Achalpur",
    "Osmanabad",
    "Nandurbar",
    "Wardha",
    "Udgir",
    "Hinganghat",
  ];
  constructor(private _login: LoginService) {}
  bankDetailsUserData: any[] = [];
  ngOnInit(): void {}

  bankDetailsData(bankform: any) {
    this._login
      .bankDetailsfrom(bankform.value)
      .subscribe((res) => (this.bankDetailsUserData = res));
  }
}
