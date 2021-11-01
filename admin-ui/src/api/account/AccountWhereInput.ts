import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { JsonNullableFilter } from "../../util/JsonNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type AccountWhereInput = {
  active?: BooleanNullableFilter;
  configuration?: JsonNullableFilter;
  email?: StringFilter;
  id?: StringFilter;
  organization?: OrganizationWhereUniqueInput;
};
