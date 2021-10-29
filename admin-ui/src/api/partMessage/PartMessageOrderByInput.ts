import { SortOrder } from "../../util/SortOrder";

export type PartMessageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  messageType?: SortOrder;
  type?: SortOrder;
  updatedAt?: SortOrder;
};
