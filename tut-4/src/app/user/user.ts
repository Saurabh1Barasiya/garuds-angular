import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  constructor(private router:Router){}

  users = [
    { id: 1, name: 'Ram' },
    { id: 2, name: 'Shyam' },
    { id: 3, name: 'Mohan' }
  ];

  goToUser(id:number){
    this.router.navigate(["/user",id]);
  } 
}
