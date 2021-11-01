import { SortOrder } from "../../util/SortOrder";

export type ShipmentOrderByInput = {
  courier?: SortOrder;
  createdAt?: SortOrder;
  declaredValues?: SortOrder;
  delayedAt?: SortOrder;
  deliveredAt?: SortOrder;
  estimatedAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  partial?: SortOrder;
  productionId?: SortOrder;
  shippedAt?: SortOrder;
  status?: SortOrder;
  tracking?: SortOrder;
  trackingUrl?: SortOrder;
  type?: SortOrder;
  updatedAt?: SortOrder;
};
