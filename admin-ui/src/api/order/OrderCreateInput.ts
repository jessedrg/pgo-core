import { JsonValue } from "type-fest";
import { PaymentWhereUniqueInput } from "../payment/PaymentWhereUniqueInput";

export type OrderCreateInput = {
  billingAddress?: JsonValue | null;
  comment?: string | null;
  customCode?: string | null;
  estimatedDays?: number | null;
  fees?: JsonValue | null;
  payment?: PaymentWhereUniqueInput | null;
  shippingaddress?: JsonValue | null;
  status?: Array<
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
