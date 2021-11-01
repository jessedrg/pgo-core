import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ProductionWhereUniqueInput } from "../production/ProductionWhereUniqueInput";

export type ShipmentWhereInput = {
  courier?: StringNullableFilter;
  declaredValues?: FloatNullableFilter;
  delayedAt?: DateTimeNullableFilter;
  deliveredAt?: DateTimeNullableFilter;
  estimatedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  partial?: BooleanNullableFilter;
  production?: ProductionWhereUniqueInput;
  shippedAt?: DateTimeNullableFilter;
  status?: "pending" | "OnTransit" | "delivered";
  tracking?: StringNullableFilter;
  trackingUrl?: StringNullableFilter;
  type?: "production" | "order";
};
