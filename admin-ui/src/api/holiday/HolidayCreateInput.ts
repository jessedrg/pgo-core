import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type HolidayCreateInput = {
  day?: number | null;
  provider?: ProviderWhereUniqueInput | null;
};
