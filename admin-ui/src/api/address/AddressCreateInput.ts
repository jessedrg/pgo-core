import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type AddressCreateInput = {
  company?: string | null;
  country?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  locality?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  phone?: string | null;
  phonePrefix?: string | null;
  postalCode?: string | null;
  state?: string | null;
  street?: string | null;
  streetNumber?: string | null;
  type?: "Billing" | "Shipping" | null;
  vat?: string | null;
};
