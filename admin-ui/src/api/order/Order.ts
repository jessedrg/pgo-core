import { JsonValue } from "type-fest";

export type Order = {
  billingAddress: JsonValue | null;
  comment: string | null;
  createdAt: Date;
  customNo: string | null;
  estimatedDays: number | null;
  fees: JsonValue | null;
  id: string;
  shippingaddress: JsonValue | null;
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
  subtotal: number | null;
  taxes: JsonValue | null;
  total: number | null;
  updatedAt: Date;
};
