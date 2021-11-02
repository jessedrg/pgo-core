import { SortOrder } from "../../util/SortOrder";

export type ProductionOrderByInput = {
  accountId?: SortOrder;
  createdAt?: SortOrder;
  discomformity?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
