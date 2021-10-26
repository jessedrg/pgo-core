import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ShipmentWhereInput = {
  courier?: StringNullableFilter;
  declaredValues?: FloatNullableFilter;
  delayedAt?: DateTimeNullableFilter;
  deliveredAt?: DateTimeNullableFilter;
  estimatedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  partial?: BooleanNullableFilter;
  realtedId?: StringNullableFilter;
  relatedType?: StringNullableFilter;
  shippedAt?: DateTimeNullableFilter;
  status?: "pending" | "OnTransit" | "delivered";
  tracking?: StringNullableFilter;
  trackingUrl?: StringNullableFilter;
};
