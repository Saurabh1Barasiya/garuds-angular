import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  userId!:number;
  constructor(private ar:ActivatedRoute,private router:Router){
    this.ar.params.subscribe({
      next:(res)=>{ 
        console.log(res);    // {id: '1'}
        console.log(typeof res['id']); // string

        this.userId = +res['id'];
      }
    })
  }

  goTohome(){
    this.router.navigate([""]);
  }
}
