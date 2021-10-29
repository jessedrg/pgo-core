import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type InviteWhereInput = {
  active?: BooleanNullableFilter;
  email?: StringNullableFilter;
  expiresAt?: DateTimeNullableFilter;
  id?: StringFilter;
};
