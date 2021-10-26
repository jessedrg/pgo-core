import { SortOrder } from "../../util/SortOrder";

export type QuoteItemOrderByInput = {
  basePrices?: SortOrder;
  constructionType?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  margins?: SortOrder;
  partIdId?: SortOrder;
  prices?: SortOrder;
  productionDays?: SortOrder;
  quantities?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
