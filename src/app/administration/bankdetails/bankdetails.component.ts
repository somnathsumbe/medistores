import { Component, OnInit } from '@angular/core';
import { MastersService } from 'src/app/shared/service/masters.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bankdetails',
  templateUrl: './bankdetails.component.html',
  styleUrls: ['./bankdetails.component.css'],
})

export class BankdetailsComponent implements OnInit {
  public parties: any[] = [];
  public Cities: any[] = [];
  public BankList: any[] = [];
  public bankForm;
  constructor(
    private masterService: MastersService,
    private toastr: ToastrService
    ) { }
  ngOnInit(): void {
    this.getBankData();
    this.getCityData();
    this.getPartyData();
  }

  getBankData() {
    this.masterService.fetchDetails('/master/bankNames').subscribe(bankdata => {
      this.BankList = bankdata;
      console.log(this.BankList);
    });
  }

  getCityData() {
    this.masterService.fetchDetails('location?pageNumber=0&maxCount=100').subscribe(CityList => {
      this.Cities = CityList;
      console.log(this.Cities);
    });
  }

  getPartyData() {
    this.masterService.fetchDetails('/customer').subscribe(PartyList => {
      this.parties = PartyList.map((item) => {
        const obj = {
          label: item.firmName,
          value: item.customerId
        };
        return obj;
      });
      console.log(this.parties);
    });
  }

  bankDetailsData(bankform: any) {
    this.bankForm = bankform.value;
    console.log(this.bankForm);
    // "bankId": null,
    // "bankName": "SBI - State Bank",
    // "address": "Kranti Chauk",
    // "branchCode": "BNK89234",
    // "ifscCode": "SBIN0701234",
    // "cityName": "Ahmednagar",
    // "customerId": 2

    // address: "sdaada"
    // bankAccount: 12323
    // bankId: "Allahabad Bank"
    // branchCode: "asdad"
    // cityId: "Akola                    "
    // ifscCode: "asdasda"
    // partyName: "1"
    // postCode: 2133223

    //bankId
    console.log(this.bankForm);
    // this.masterService.addEditDetails('bank', this.bankForm).subscribe((bankdata) => {
    //   if (bankdata) {
    //     this.toastr.success('Banks Details  saved successfully');
    //     bankform.reset();
    //   }
    // });
  }
}
