import { SortOrder } from "../../util/SortOrder";

export type OfferOrderByInput = {
  accountId?: SortOrder;
  createdAt?: SortOrder;
  customNumber?: SortOrder;
  id?: SortOrder;
  publishedAt?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
