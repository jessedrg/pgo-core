import { SortOrder } from "../../util/SortOrder";

export type PartMessageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  partId?: SortOrder;
  senderId?: SortOrder;
  type?: SortOrder;
  updatedAt?: SortOrder;
  userType?: SortOrder;
};
