import { SortOrder } from "../../util/SortOrder";

export type ProductionOrderByInput = {
  createdAt?: SortOrder;
  discomformity?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
