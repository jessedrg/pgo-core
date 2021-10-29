import { SortOrder } from "../../util/SortOrder";

export type ProductionItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  quantity?: SortOrder;
  shippedQuantity?: SortOrder;
  updatedAt?: SortOrder;
};
