import { SortOrder } from "../../util/SortOrder";

export type PartMessageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  messageType?: SortOrder;
  partIdId?: SortOrder;
  recieverIdId?: SortOrder;
  senderIdId?: SortOrder;
  type?: SortOrder;
  updatedAt?: SortOrder;
};
