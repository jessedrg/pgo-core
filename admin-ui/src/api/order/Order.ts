import { JsonValue } from "type-fest";
import { OrderItem } from "../orderItem/OrderItem";
import { Payment } from "../payment/Payment";
import { Production } from "../production/Production";
import { Shipment } from "../shipment/Shipment";

export type Order = {
  billingAddress: JsonValue | null;
  comment: string | null;
  createdAt: Date;
  customNo: string | null;
  estimatedDays: number | null;
  fees: JsonValue | null;
  id: string;
  orderItems?: Array<OrderItem>;
  payment?: Payment | null;
  productions?: Array<Production>;
  shipment?: Shipment;
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
