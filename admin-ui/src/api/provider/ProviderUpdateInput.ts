import { JsonValue } from "type-fest";

export type ProviderUpdateInput = {
  currency?: string | null;
  dateFormat?: string | null;
  name?: string | null;
  rating?: number | null;
  ratingData?: JsonValue | null;
  shippmentDates?: number | null;
  technologies?: JsonValue | null;
  type?: string | null;
  workingDays?: JsonValue | null;
};
