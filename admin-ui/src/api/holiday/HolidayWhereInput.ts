import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type HolidayWhereInput = {
  day?: IntNullableFilter;
  id?: StringFilter;
};
