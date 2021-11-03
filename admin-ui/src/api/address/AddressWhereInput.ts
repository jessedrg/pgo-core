import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type AddressWhereInput = {
  company?: StringNullableFilter;
  country?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  locality?: StringNullableFilter;
  organization?: OrganizationWhereUniqueInput;
  phone?: StringNullableFilter;
  phonePrefix?: StringNullableFilter;
  postalCode?: StringNullableFilter;
  state?: StringNullableFilter;
  street?: StringNullableFilter;
  streetNumber?: StringNullableFilter;
  type?: "Billing" | "Shipping";
  vat?: StringNullableFilter;
};
