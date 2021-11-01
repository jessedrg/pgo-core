import { SortOrder } from "../../util/SortOrder";

export type ProductionItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productionId?: SortOrder;
  quantity?: SortOrder;
  shippedQuantity?: SortOrder;
  updatedAt?: SortOrder;
};
