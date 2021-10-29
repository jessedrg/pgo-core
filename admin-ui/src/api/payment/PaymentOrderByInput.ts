import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  transactionId?: SortOrder;
  transactionUserId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
