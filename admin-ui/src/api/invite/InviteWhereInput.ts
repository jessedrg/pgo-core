import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type InviteWhereInput = {
  accountId?: AccountWhereUniqueInput;
  active?: BooleanNullableFilter;
  email?: StringNullableFilter;
  expiresAt?: DateTimeNullableFilter;
  id?: StringFilter;
};
