import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { Authservices } from '../Services/authservices';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private router:Router,private auth:Authservices){}

  onLogin(){
    this.auth.doLogin();
    this.router.navigate(['/dashboard']);
  }


}
