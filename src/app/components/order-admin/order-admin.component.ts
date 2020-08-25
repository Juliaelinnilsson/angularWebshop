import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.scss']
})
export class OrderAdminComponent implements OnInit {
  @Input() order: Order;
  

  constructor() { }

  ngOnInit(): void {
  }

}
