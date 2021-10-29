import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type OrganizationWhereInput = {
  addres?: StringNullableFilter;
  address?: AddressWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
