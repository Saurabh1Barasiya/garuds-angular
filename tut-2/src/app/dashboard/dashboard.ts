import { Component, inject } from '@angular/core';
import { AuthServices } from '../Services/auth-services';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  authService = inject(AuthServices);

  logout(){
    this.authService.makeLogout();
  }

  admin(){
    this.authService.makeAdmin();
  }
}
