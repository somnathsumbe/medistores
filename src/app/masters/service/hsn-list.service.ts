import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from "@angular/common/http";


@Injectable({
  providedIn: 'root' 
})
export class HsnListService {
  HSNUrl = "http://192.168.0.100:8080/medistores/hsnList";
  saveHSNUrl = "http://192.168.0.100:8080/medistores/saveHsn";  

  constructor(public http: HttpClient) {}
  gethsnListDetails() {
    return this.http.get < any > (this.HSNUrl);
  }

  PosthsnListDetails(hsnformdata) {

    return this.http.post <any> (this.saveHSNUrl,hsnformdata);
  }

}
