import { SortOrder } from "../../util/SortOrder";

export type ProductionItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  partIdId?: SortOrder;
  productionIdId?: SortOrder;
  quantity?: SortOrder;
  shippedQuantity?: SortOrder;
  updatedAt?: SortOrder;
};
