import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MastersService } from 'src/app/shared/service/masters.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bankdetails',
  templateUrl: './bankdetails.component.html',
  styleUrls: ['./bankdetails.component.css'],
  preserveWhitespaces: true
})

export class BankdetailsComponent implements OnInit {
  public partiesList: any[] = [];
  public bankForm: FormGroup;
  public cityList: any[] = [];
  public bankList: any[] = [];
  public partybankDetailList: any[] = [];
  public editBankId: number;
  constructor(
    private masterService: MastersService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.bankForm = this.formBuilder.group({
      bankId: [null],
      customerId: ['', Validators.required],
      bankName: ['', Validators.required],
      address: ['', Validators.required],
      ifscCode: ['', Validators.required],
      accountNumber: ['', Validators.required],
      cityName: ['', Validators.required]
    });
    this.editBankId = null;
    this.getBankList();
    this.getCityList();
    this.getPartyList();
    this.getAllBankDetailList();
  }

  private getPartyList(): void {
    this.masterService.fetchDetails('/customer').subscribe(Response => {
      this.partiesList = Response.map((item) => {
        const obj = {
          label: item.firmName,
          value: item.customerId
        };
        return obj;
      });
    }, (error: Error): void => {
      this.toastr.error('Something wents wrong...');
    });
  }

  private getBankList(): void {
    this.masterService.fetchDetails('/master/bankNames').subscribe(bankdata => {
      this.bankList = bankdata;
    }, (error: Error): void => {
      this.toastr.error('Something wents wrong...');
    });
  }

  private getCityList(): void {
    this.masterService.fetchDetails('location?pageNumber=0&maxCount=100').subscribe(Response => {
      this.cityList = Response;
    }, (error: Error): void => {
      this.toastr.error('Something wents wrong...');
    });
  }

  private getAllBankDetailList(): void {
    this.masterService.fetchDetails('bank').subscribe(Response => {
      this.partybankDetailList = Response['1'];
      console.log(this.partybankDetailList);
    }, (error: Error): void => {
      this.toastr.error('Something wents wrong...');
    });
  }

  public bankDetailsData(bankform: any): void {
    console.log(bankform.value);
    this.masterService.addEditDetails('bank', bankform.value).subscribe((Response) => {
      console.log(Response);
      if (Response) {
        if (this.editBankId) {
          this.toastr.success('Bank details updated successfully');
        } else {
          this.toastr.success('Bank details saved successfully');
        }
        this.getAllBankDetailList();
        this.resetbankform();
      } else {
        this.toastr.error('Something wents wrong...');
      }
    }, (error: Error): void => {
      this.toastr.error('Something wents wrong...');
    });
  }

  public resetbankform(): void {
    this.bankForm = this.formBuilder.group({
      bankId: [null],
      customerId: [''],
      bankName: [''],
      address: [''],
      ifscCode: [''],
      accountNumber: [''],
      cityName: ['']
    });
    this.editBankId = null;
  }

  public editBankDetails(bankData: any): void {
    console.log(bankData);
    this.editBankId = bankData.bankId;
    this.bankForm.patchValue(bankData);
    this.bankForm.controls['customerId'].disable();
  }
}
