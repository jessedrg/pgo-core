import { MediaFile } from "../mediaFile/MediaFile";
import { Order } from "../order/Order";

export type Shipment = {
  attachments?: Array<MediaFile>;
  courier: string | null;
  createdAt: Date;
  declaredValues: number | null;
  delayedAt: Date | null;
  deliveredAt: Date | null;
  estimatedAt: Date | null;
  id: string;
  labels?: Array<MediaFile>;
  ordersInShipment?: Array<Order>;
  partial: boolean | null;
  realtedId: string | null;
  relatedType: string | null;
  shippedAt: Date | null;
  status?: "pending" | "OnTransit" | "delivered" | null;
  tracking: string | null;
  trackingUrl: string | null;
  updatedAt: Date;
};
