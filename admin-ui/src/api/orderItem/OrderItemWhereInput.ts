import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OrderItemWhereInput = {
  id?: StringFilter;
  orderId?: OrderWhereUniqueInput;
  partId?: PartWhereUniqueInput;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
  total?: FloatNullableFilter;
};
