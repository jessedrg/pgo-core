import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  billingAddress?: SortOrder;
  comment?: SortOrder;
  createdAt?: SortOrder;
  customNo?: SortOrder;
  estimatedDays?: SortOrder;
  fees?: SortOrder;
  id?: SortOrder;
  paymentId?: SortOrder;
  shipmentId?: SortOrder;
  shippingaddress?: SortOrder;
  state?: SortOrder;
  subtotal?: SortOrder;
  taxes?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
};
