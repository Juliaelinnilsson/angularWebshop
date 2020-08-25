import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import Product from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  cart: Product[] = [];

  constructor(private cartservice: CartService, private fb: FormBuilder) {}

  user = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    paymentMethod: [''],

    address: this.fb.group({
      street: ['', Validators.required],
      zip: ['', Validators.required],
      city: ['', Validators.required],
    }),
  });

  ngOnInit(): void {
    if (localStorage.getItem('product')) {
      this.cart = JSON.parse(localStorage.getItem('product'));
    } else {
      this.cart = [];
    }
  }

  save() {
    const order = new Order();
    order.companyId = 498;
    order.createdBy = this.user.value.firstName + ' ' + this.user.value.lastName;
    order.status = 200;
    order.orderRows = [];
    order.paymentMethod = this.user.value.paymentMethod;

    console.log(order);
    const orderDetails = this.cart.map((row) => {
      console.log(row);
      return {
        productId: row.id,
        amount: row.amount,
      };
    });

    orderDetails.forEach((product) => {
      order.orderRows.push(product);
    });

    this.cartservice.postOrder(order);
    console.log('klickade');

    localStorage.clear();
  }
}
