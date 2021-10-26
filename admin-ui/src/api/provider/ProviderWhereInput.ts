import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HolidayWhereUniqueInput } from "../holiday/HolidayWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonNullableFilter } from "../../util/JsonNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProviderWhereInput = {
  currency?: StringNullableFilter;
  dateFormat?: StringNullableFilter;
  holidaysId?: HolidayWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  rating?: FloatNullableFilter;
  ratingData?: JsonNullableFilter;
  shippmentDates?: IntNullableFilter;
  technologies?: JsonNullableFilter;
  typeson?: StringNullableFilter;
  workingDays?: JsonNullableFilter;
};
