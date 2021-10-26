import { SortOrder } from "../../util/SortOrder";

export type ShipmentOrderByInput = {
  courier?: SortOrder;
  createdAt?: SortOrder;
  declaredValues?: SortOrder;
  delayedAt?: SortOrder;
  deliveredAt?: SortOrder;
  estimatedAt?: SortOrder;
  id?: SortOrder;
  partial?: SortOrder;
  realtedId?: SortOrder;
  relatedType?: SortOrder;
  shippedAt?: SortOrder;
  status?: SortOrder;
  tracking?: SortOrder;
  trackingUrl?: SortOrder;
  updatedAt?: SortOrder;
};
