import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type HolidayWhereInput = {
  day?: DateTimeNullableFilter;
  id?: StringFilter;
  provider?: ProviderWhereUniqueInput;
};
