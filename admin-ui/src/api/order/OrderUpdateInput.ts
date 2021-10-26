import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { JsonValue } from "type-fest";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ShipmentWhereUniqueInput } from "../shipment/ShipmentWhereUniqueInput";

export type OrderUpdateInput = {
  acountId?: AccountWhereUniqueInput | null;
  billingAddress?: JsonValue | null;
  comment?: string | null;
  customNo?: string | null;
  estimatedDays?: number | null;
  fees?: JsonValue | null;
  organizationId?: OrganizationWhereUniqueInput | null;
  shipmentId?: ShipmentWhereUniqueInput | null;
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
