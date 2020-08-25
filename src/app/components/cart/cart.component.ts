import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}
  cart: Product[] = [];
  totalPrice: number;

  ngOnInit(): void {
    this.cart = this.cartService.getItems();
    this.totalPrice = this.cartService.showTotalPrice();

    if (localStorage.getItem('product')) {
      this.cart = JSON.parse(localStorage.getItem('product'));
    } else {
      this.cart = [];
    }
  }

  deleteProduct(pushedProduct) {
    this.cartService.deleteFromCart(pushedProduct);
    this.totalPrice = this.cartService.showTotalPrice();
  }
}
