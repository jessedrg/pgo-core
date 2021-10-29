import { SortOrder } from "../../util/SortOrder";

export type QuoteOrderByInput = {
  completedAt?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
