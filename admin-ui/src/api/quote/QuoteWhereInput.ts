import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type QuoteWhereInput = {
  accountId?: AccountWhereUniqueInput;
  completedAt?: DateTimeNullableFilter;
  id?: StringFilter;
};
