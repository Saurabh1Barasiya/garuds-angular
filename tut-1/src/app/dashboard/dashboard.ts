import { Component, inject } from '@angular/core';
import { Authservices } from '../Services/authservices';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  auth = inject(Authservices);

  logout(){
    this.auth.doLogout();
  }
}
