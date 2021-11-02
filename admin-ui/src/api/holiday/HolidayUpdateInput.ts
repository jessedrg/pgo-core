import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type HolidayUpdateInput = {
  day?: Date | null;
  provider?: ProviderWhereUniqueInput | null;
};
