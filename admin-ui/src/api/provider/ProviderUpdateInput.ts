import { HolidayWhereUniqueInput } from "../holiday/HolidayWhereUniqueInput";
import { JsonValue } from "type-fest";

export type ProviderUpdateInput = {
  currency?: string | null;
  dateFormat?: string | null;
  holidaysId?: HolidayWhereUniqueInput | null;
  name?: string | null;
  rating?: number | null;
  ratingData?: JsonValue | null;
  shippmentDates?: number | null;
  technologies?: JsonValue | null;
  typeson?: string | null;
  workingDays?: JsonValue | null;
};
