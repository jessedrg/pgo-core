import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  company?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  locality?: SortOrder;
  phone?: SortOrder;
  phonePrefix?: SortOrder;
  postalCode?: SortOrder;
  state?: SortOrder;
  street?: SortOrder;
  streetNumber?: SortOrder;
  type?: SortOrder;
  updatedAt?: SortOrder;
  vat?: SortOrder;
};
