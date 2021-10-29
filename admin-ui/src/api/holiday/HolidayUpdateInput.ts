import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type HolidayUpdateInput = {
  day?: number | null;
  provider?: ProviderWhereUniqueInput | null;
};
