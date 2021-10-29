import { SortOrder } from "../../util/SortOrder";

export type QuoteItemOrderByInput = {
  basePrices?: SortOrder;
  constructionType?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  margins?: SortOrder;
  partId?: SortOrder;
  prices?: SortOrder;
  productionDays?: SortOrder;
  providerId?: SortOrder;
  quantities?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
