import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Product from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-print-cart',
  templateUrl: './print-cart.component.html',
  styleUrls: ['./print-cart.component.scss']
})
export class PrintCartComponent implements OnInit {
  @Input() cart : Product;


  cartItems:Product[] = JSON.parse(localStorage.getItem('cart')) || [];
  totalPrice: number;

  constructor() { }

  ngOnInit(): void {

  }

}
