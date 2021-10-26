import { Order } from "../order/Order";
import { Part } from "../part/Part";

export type OrderItem = {
  createdAt: Date;
  id: string;
  orderId?: Order | null;
  partId?: Part | null;
  price: number | null;
  quantity: number | null;
  total: number | null;
  updatedAt: Date;
};
