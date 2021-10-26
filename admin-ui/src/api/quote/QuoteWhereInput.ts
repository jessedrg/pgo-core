import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type QuoteWhereInput = {
  accountId?: AccountWhereUniqueInput;
  completedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  providerId?: ProviderWhereUniqueInput;
};
