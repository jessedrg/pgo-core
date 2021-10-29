import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SessionWhereInput = {
  authMethod?: StringNullableFilter;
  id?: StringFilter;
  sessionToken?: StringNullableFilter;
};
