import { SortOrder } from "../../util/SortOrder";

export type MediaFileOrderByInput = {
  createdAt?: SortOrder;
  fileName?: SortOrder;
  id?: SortOrder;
  type?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
