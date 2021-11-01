import { Order } from "../order/Order";
import { Production } from "../production/Production";

export type Shipment = {
  courier: string | null;
  createdAt: Date;
  declaredValues: number | null;
  delayedAt: Date | null;
  deliveredAt: Date | null;
  estimatedAt: Date | null;
  id: string;
  order?: Order | null;
  partial: boolean | null;
  production?: Production | null;
  shippedAt: Date | null;
  status?: "pending" | "OnTransit" | "delivered" | null;
  tracking: string | null;
  trackingUrl: string | null;
  type?: "production" | "order" | null;
  updatedAt: Date;
};
