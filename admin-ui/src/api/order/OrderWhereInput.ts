import { JsonNullableFilter } from "../../util/JsonNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  billingAddress?: JsonNullableFilter;
  comment?: StringNullableFilter;
  customNo?: StringNullableFilter;
  estimatedDays?: IntNullableFilter;
  fees?: JsonNullableFilter;
  id?: StringFilter;
  shippingaddress?: JsonNullableFilter;
  subtotal?: FloatNullableFilter;
  taxes?: JsonNullableFilter;
  total?: FloatNullableFilter;
};
