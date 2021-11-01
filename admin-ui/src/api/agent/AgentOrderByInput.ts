import { SortOrder } from "../../util/SortOrder";

export type AgentOrderByInput = {
  accountId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  zones?: SortOrder;
};
