export type ShipmentUpdateInput = {
  courier?: string | null;
  declaredValues?: number | null;
  delayedAt?: Date | null;
  deliveredAt?: Date | null;
  estimatedAt?: Date | null;
  partial?: boolean | null;
  realtedId?: string | null;
  relatedType?: string | null;
  shippedAt?: Date | null;
  status?: "pending" | "OnTransit" | "delivered" | null;
  tracking?: string | null;
  trackingUrl?: string | null;
};
