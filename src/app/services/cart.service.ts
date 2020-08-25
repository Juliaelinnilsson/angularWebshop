import { Injectable } from '@angular/core';
import Product from '../models/Product';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = JSON.parse(localStorage.getItem('product')) || [];
  totalPrice = 0;
  orderApi =
    'https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=498';
  order: Order;

  constructor(private http: HttpClient) {}

  addToCart(product) {
    console.log(product);
    let productToAdd = new Product();
    productToAdd = product;

    this.cart.push(productToAdd);
    console.log(this.cart);
    window.localStorage.setItem('product', JSON.stringify(this.cart));
  }


  deleteFromCart(pushedProduct) {
    let index = this.cart.indexOf(pushedProduct);
    this.cart.splice(index, 1);
    this.totalPrice = 0;
    this.cart.forEach(item => {
    this.totalPrice += item.price;
    });

    window.localStorage.setItem('product', JSON.stringify(this.cart))
  }

  showTotalPrice() {
    if (this.totalPrice === 0) {
      this.cart.forEach((product) => {
        this.totalPrice += product.price;
      });
    }
    return this.totalPrice;
  }

  getItems() {
    return this.cart;
  }

  postOrder(order: Order): void {
    console.log(order);
    this.http
      .post<Order>(this.orderApi, {
        id: order.id,
        companyId: order.companyId,
        createdBy: order.createdBy,
        totalPrice: order.totalPrice,
        orderRow: order.orderRows,
        paymentMethod: order.paymentMethod,
      })
      .subscribe((order: Order) => {
        console.log(order);
        (this.order = order), (error: any) => console.log('Oops' + error);
      });
  }
}
