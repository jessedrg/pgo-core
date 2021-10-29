import { SortOrder } from "../../util/SortOrder";

export type OfferOrderByInput = {
  createdAt?: SortOrder;
  customNo?: SortOrder;
  id?: SortOrder;
  publishedAt?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
