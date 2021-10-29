import { SortOrder } from "../../util/SortOrder";

export type QuoteOrderByInput = {
  accountId?: SortOrder;
  completedAt?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  providerId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
