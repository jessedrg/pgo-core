import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AddressWhereInput = {
  company?: StringNullableFilter;
  country?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  locality?: StringNullableFilter;
  phone?: StringNullableFilter;
  phonePrefix?: StringNullableFilter;
  postalCode?: StringNullableFilter;
  state?: StringNullableFilter;
  street?: StringNullableFilter;
  streetNumber?: StringNullableFilter;
  type?: StringNullableFilter;
  vat?: StringNullableFilter;
};
