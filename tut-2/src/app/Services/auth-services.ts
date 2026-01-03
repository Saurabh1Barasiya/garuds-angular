import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServices {

  router = inject(Router);

  isloggedIn:boolean=false;
  isadmin:boolean=false;

  makeLogin(){
    this.isadmin = true;
  }

  makeLogout(){
    this.isadmin = false;
    this.router.navigate(['login']);
  }

  loginStatus(){
    return this.isloggedIn;
  }

  adminStatus(){
    return this.isadmin;
  }

  makeAdmin(){
    this.isadmin = true;
  }

}
