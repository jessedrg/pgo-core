import { SortOrder } from "../../util/SortOrder";

export type OrderItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
};
