import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { PrintProductComponent } from './components/print-product/print-product.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PrintCartComponent } from './components/print-cart/print-cart.component';
import { AdminComponent } from './components/admin/admin.component';
import { OrderAdminComponent } from './components/order-admin/order-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    PrintProductComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,
    AboutComponent,
    NotfoundComponent,
    PrintCartComponent,
    AdminComponent,
    OrderAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
