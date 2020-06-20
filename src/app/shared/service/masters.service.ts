import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MastersService {

  constructor(public http: HttpClient) {}

  // Get method to fetch the list
  fetchDetails(url) {
    const serviceURL = `${environment.hostUrl}/${url}`
    return this.http.get < any > (serviceURL);
  }

  // add/edit new Information
  addEditDetails(url, body) {
    const serviceURL = `${environment.hostUrl}/${url}`
    return this.http.post <any> (serviceURL, body);
  }
}
