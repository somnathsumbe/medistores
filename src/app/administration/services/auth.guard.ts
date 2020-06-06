import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  islogin:boolean;
  constructor(private _login:LoginService, private _router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.islogin= this._login.islogin;
      if(!this.islogin){
        alert("redirect to home page ");
        this._router.navigate(['dashbord']);
  
      }
      else{
        alert("inter dashbord ");
        this._router.navigate(['profile']);
      }

    return true;
  }
  
}
