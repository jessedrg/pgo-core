import { JsonValue } from "type-fest";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";
import { ShipmentWhereUniqueInput } from "../shipment/ShipmentWhereUniqueInput";

export type OrderCreateInput = {
  billingAddress?: JsonValue | null;
  comment?: string | null;
  customNo?: string | null;
  estimatedDays?: number | null;
  fees?: JsonValue | null;
  organization?: OrganizationWhereUniqueInput | null;
  payment?: PaymentWhereUniqueInput | null;
  shipment?: ShipmentWhereUniqueInput;
  shippingaddress?: JsonValue | null;
  state?: Array<
    | "onHold"
    | "failed"
    | "processing"
    | "production"
    | "quality"
    | "shipped"
    | "completed"
    | "cancelled"
    | "refound"
  >;
  subtotal?: number | null;
  taxes?: JsonValue | null;
  total?: number | null;
};
