import { SortOrder } from "../../util/SortOrder";

export type AgentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  zones?: SortOrder;
};
