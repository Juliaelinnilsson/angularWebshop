import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: AdminService) {}

  ngOnInit(): void {
    this.orderService.orders.subscribe((o: Order[]) => {
      this.orders = o;
    });

    this.orderService.getProducts();
  }
}
