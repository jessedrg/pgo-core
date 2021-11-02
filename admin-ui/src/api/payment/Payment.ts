import { Order } from "../order/Order";

export type Payment = {
  createdAt: Date;
  id: string;
  orders?: Array<Order>;
  status?: "pending" | "completed" | "rejected" | null;
  transactionId: string | null;
  transactionUserId: string | null;
  updatedAt: Date;
};
