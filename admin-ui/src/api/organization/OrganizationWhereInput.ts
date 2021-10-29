import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OrganizationWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
