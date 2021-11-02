import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  active?: SortOrder;
  agentId?: SortOrder;
  configuration?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  organizationId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
