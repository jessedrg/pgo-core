import { SortOrder } from "../../util/SortOrder";

export type QuoteItemOrderByInput = {
  constructionType?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  margins?: SortOrder;
  partId?: SortOrder;
  productionDays?: SortOrder;
  providerId?: SortOrder;
  quantities?: SortOrder;
  quoteId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
