import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentWhereInput = {
  id?: StringFilter;
  status?: "pending" | "completed" | "rejected";
  transactionId?: StringNullableFilter;
  transactionUserId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
