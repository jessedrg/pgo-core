import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ProductionWhereUniqueInput } from "../production/ProductionWhereUniqueInput";

export type ShipmentUpdateInput = {
  courier?: string | null;
  declaredValues?: number | null;
  delayedAt?: Date | null;
  deliveredAt?: Date | null;
  estimatedAt?: Date | null;
  order?: OrderWhereUniqueInput | null;
  partial?: boolean | null;
  production?: ProductionWhereUniqueInput | null;
  shippedAt?: Date | null;
  status?: "pending" | "OnTransit" | "delivered" | null;
  tracking?: string | null;
  trackingUrl?: string | null;
  type?: "production" | "order" | null;
};
