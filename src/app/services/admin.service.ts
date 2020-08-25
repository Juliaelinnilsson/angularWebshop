import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { adminOrder }  from '../models/adminOrder'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  orders = new Subject<adminOrder[]>();
  constructor(private http: HttpClient) {}

  getProducts() {
    this.http
      .get(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=498'
      )
      .subscribe((data: any) => {
        const ordersFromApi: adminOrder[] = data.map((product) => {
          const ourOwnOrderObject = new adminOrder();
          ourOwnOrderObject.companyId = product.companyId
          ourOwnOrderObject.id = product.id;
          ourOwnOrderObject.createdBy = product.createdBy;
          ourOwnOrderObject.totalPrice = product.totalPrice;
          ourOwnOrderObject.paymentMethod = product.paymentMethod;
          return ourOwnOrderObject ;
        });

        this.orders.next(ordersFromApi);
      });
  }
}
