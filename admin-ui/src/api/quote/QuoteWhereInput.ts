import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type QuoteWhereInput = {
  account?: AccountWhereUniqueInput;
  completedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  provider?: ProviderWhereUniqueInput;
};
