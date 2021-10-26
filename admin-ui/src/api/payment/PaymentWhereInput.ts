import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PaymentWhereInput = {
  accountId?: AccountWhereUniqueInput;
  id?: StringFilter;
  orderId?: OrderWhereUniqueInput;
  status?: "pending" | "completed" | "rejected";
  transactionId?: StringNullableFilter;
  transactionUserId?: StringNullableFilter;
};
