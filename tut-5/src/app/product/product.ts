import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  product!: string;
  price!: number;

  constructor(private ar:ActivatedRoute){
    this.ar.queryParams.subscribe({
      next:(res)=>{
        console.log(res); // {product: 'mobile', price: '10000'}
        this.product = res['product'];  // mobile
        this.price = res['price'];      // 10000
      }
    });
  }
}
