import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type HolidayWhereInput = {
  day?: IntNullableFilter;
  id?: StringFilter;
  provider?: ProviderWhereUniqueInput;
};
