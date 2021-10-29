import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OrderItemWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
  total?: FloatNullableFilter;
};
