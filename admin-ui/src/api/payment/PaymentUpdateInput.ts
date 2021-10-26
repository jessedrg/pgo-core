import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type PaymentUpdateInput = {
  accountId?: AccountWhereUniqueInput | null;
  orderId?: OrderWhereUniqueInput | null;
  status?: "pending" | "completed" | "rejected" | null;
  transactionId?: string | null;
  transactionUserId?: string | null;
};
