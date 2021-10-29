import { SortOrder } from "../../util/SortOrder";

export type PartMessageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  messageType?: SortOrder;
  partId?: SortOrder;
  recieverId?: SortOrder;
  senderId?: SortOrder;
  type?: SortOrder;
  updatedAt?: SortOrder;
};
