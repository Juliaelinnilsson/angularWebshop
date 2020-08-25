import { OrderRows } from './OrderRow';

export class Order {
  id: number;
  companyId = 498;
  createdBy: string;
  totalPrice: number;
  status: number;
  orderRows: OrderRows[];
  paymentMethod: string;
}
