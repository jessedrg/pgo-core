import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  accountIdId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  orderIdId?: SortOrder;
  status?: SortOrder;
  transactionId?: SortOrder;
  transactionUserId?: SortOrder;
  updatedAt?: SortOrder;
};
