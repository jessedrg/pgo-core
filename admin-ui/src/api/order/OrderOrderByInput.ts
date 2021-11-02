import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  billingAddress?: SortOrder;
  comment?: SortOrder;
  createdAt?: SortOrder;
  customCode?: SortOrder;
  estimatedDays?: SortOrder;
  fees?: SortOrder;
  id?: SortOrder;
  paymentId?: SortOrder;
  shippingaddress?: SortOrder;
  status?: SortOrder;
  subtotal?: SortOrder;
  taxes?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
};
