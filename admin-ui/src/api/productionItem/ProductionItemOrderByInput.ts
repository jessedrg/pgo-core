import { SortOrder } from "../../util/SortOrder";

export type ProductionItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  partId?: SortOrder;
  quantity?: SortOrder;
  shippedQuantity?: SortOrder;
  updatedAt?: SortOrder;
};
