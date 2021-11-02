import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type HolidayCreateInput = {
  day?: Date | null;
  provider?: ProviderWhereUniqueInput | null;
};
