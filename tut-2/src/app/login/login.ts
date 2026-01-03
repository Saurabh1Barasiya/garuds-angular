import { Component } from '@angular/core';
import { AuthServices } from '../Services/auth-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private service:AuthServices,private router:Router){}

  login(){
    this.service.makeLogin();
    this.router.navigate(["dashboard"]);
  }
}
