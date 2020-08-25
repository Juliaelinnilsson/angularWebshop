import { Component, OnInit, Input, } from '@angular/core';
import Product from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-print-product',
  templateUrl: './print-product.component.html',
  styleUrls: ['./print-product.component.scss']
})
export class PrintProductComponent implements OnInit {
  @Input() product : Product;

  constructor(private service: CartService) { }

  ngOnInit(): void {
  }

  buyProduct(){
    this.service.addToCart(this.product)
    console.log(this.product)
    window.alert('i din varukorg');
  }

}
