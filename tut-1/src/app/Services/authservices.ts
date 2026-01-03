import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Authservices {

  private router = inject(Router);

  private isLoggedIn = false;

  doLogin(){
    this.isLoggedIn = true;
  }

  doLogout(){
    this.isLoggedIn = false;
    this.router.navigate(["login"]);
  }

  loginStatus(){
    return this.isLoggedIn;
  }
}
