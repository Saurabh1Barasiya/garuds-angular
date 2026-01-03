import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private router:Router){}

  protected title = 'tut-5';

  goToProduct(){
    this.router.navigate(["/product"],{
      queryParams:{
        'product':'mobile',
        'price':10000,
      }
    })
  }
}
