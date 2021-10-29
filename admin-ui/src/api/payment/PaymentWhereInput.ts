import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PaymentWhereInput = {
  id?: StringFilter;
  status?: "pending" | "completed" | "rejected";
  transactionId?: StringNullableFilter;
  transactionUserId?: StringNullableFilter;
};
