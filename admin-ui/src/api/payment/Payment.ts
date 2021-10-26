import { Account } from "../account/Account";
import { Order } from "../order/Order";

export type Payment = {
  accountId?: Account | null;
  createdAt: Date;
  id: string;
  orderId?: Order | null;
  status?: "pending" | "completed" | "rejected" | null;
  transactionId: string | null;
  transactionUserId: string | null;
  updatedAt: Date;
};
