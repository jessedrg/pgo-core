import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonNullableFilter } from "../../util/JsonNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  comment?: StringNullableFilter;
  customCode?: StringNullableFilter;
  estimatedDays?: IntNullableFilter;
  fees?: JsonNullableFilter;
  id?: StringFilter;
  payment?: PaymentWhereUniqueInput;
  subtotal?: FloatNullableFilter;
  taxes?: JsonNullableFilter;
  total?: FloatNullableFilter;
};
