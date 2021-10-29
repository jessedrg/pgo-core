import { SortOrder } from "../../util/SortOrder";

export type ProductionOrderByInput = {
  createdAt?: SortOrder;
  discomformity?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
