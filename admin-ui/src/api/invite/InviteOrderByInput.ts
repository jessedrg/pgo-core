import { SortOrder } from "../../util/SortOrder";

export type InviteOrderByInput = {
  active?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  expiresAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
