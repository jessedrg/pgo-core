import { JsonNullableFilter } from "../../util/JsonNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";
import { ShipmentWhereUniqueInput } from "../shipment/ShipmentWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  billingAddress?: JsonNullableFilter;
  comment?: StringNullableFilter;
  customNo?: StringNullableFilter;
  estimatedDays?: IntNullableFilter;
  fees?: JsonNullableFilter;
  id?: StringFilter;
  organization?: OrganizationWhereUniqueInput;
  payment?: PaymentWhereUniqueInput;
  shipment?: ShipmentWhereUniqueInput;
  shippingaddress?: JsonNullableFilter;
  subtotal?: FloatNullableFilter;
  taxes?: JsonNullableFilter;
  total?: FloatNullableFilter;
};
