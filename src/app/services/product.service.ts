import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Product from '../models/Product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = new Subject<Product[]>();
  constructor(private http: HttpClient) {}

  getProducts() {
    this.http
      .get(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/products'
      )
      .subscribe((data: any) => {

        const moviesFromApi: Product[] = data.map((product) => {
          const ourOwnProductObject = new Product();
          ourOwnProductObject.id = product.id;
          ourOwnProductObject.title = product.name;
          ourOwnProductObject.imageUrl = product.imageUrl;
          ourOwnProductObject.price = product.price;
          ourOwnProductObject.description = product.description;
          ourOwnProductObject.year = product.year;
          return ourOwnProductObject;
        });

        this.products.next(moviesFromApi);
      });
  }
}
