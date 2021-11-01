import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OrganizationWhereInput = {
  address?: AddressWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
