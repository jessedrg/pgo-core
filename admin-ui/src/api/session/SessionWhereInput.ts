import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionWhereInput = {
  authMethod?: StringNullableFilter;
  id?: StringFilter;
  sessionToken?: StringNullableFilter;
  userId?: UserWhereUniqueInput;
};
