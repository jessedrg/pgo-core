import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  authMethod?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  sessionToken?: SortOrder;
  updatedAt?: SortOrder;
};
