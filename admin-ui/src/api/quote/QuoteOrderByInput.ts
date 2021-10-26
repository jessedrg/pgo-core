import { SortOrder } from "../../util/SortOrder";

export type QuoteOrderByInput = {
  accountIdId?: SortOrder;
  completedAt?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  providerIdId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
