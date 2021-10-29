export type Shipment = {
  courier: string | null;
  createdAt: Date;
  declaredValues: number | null;
  delayedAt: Date | null;
  deliveredAt: Date | null;
  estimatedAt: Date | null;
  id: string;
  partial: boolean | null;
  realtedId: string | null;
  relatedType: string | null;
  shippedAt: Date | null;
  status?: "pending" | "OnTransit" | "delivered" | null;
  tracking: string | null;
  trackingUrl: string | null;
  updatedAt: Date;
};
