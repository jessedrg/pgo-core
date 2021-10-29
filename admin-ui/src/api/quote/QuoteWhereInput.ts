import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type QuoteWhereInput = {
  completedAt?: DateTimeNullableFilter;
  id?: StringFilter;
};
