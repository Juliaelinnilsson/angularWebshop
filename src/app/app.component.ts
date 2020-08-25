import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import Product from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
constructor(private service: CartService){}
  // cart: Product[] = [];

  ngOnInit(): void {

    // this.service.publishCart.subscribe((p: Product[]) => {
    //   console.log('Produkt: ', p);
    //   this.cart = p;
    // });
  }
  title = 'mywebshop';
}
