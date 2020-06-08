import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HsnListService {
  hsnList = "http://192.168.0.100:8080/medistores/hsnList";

  constructor(public http: HttpClient) { }
    gethsnListDetails() {
      return this.http.get<any>(this.hsnList);
  }
}
