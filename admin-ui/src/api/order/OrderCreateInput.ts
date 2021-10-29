import { JsonValue } from "type-fest";

export type OrderCreateInput = {
  billingAddress?: JsonValue | null;
  comment?: string | null;
  customNo?: string | null;
  estimatedDays?: number | null;
  fees?: JsonValue | null;
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
