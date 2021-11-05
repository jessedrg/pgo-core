import { JsonValue } from "type-fest";

export type ProviderCreateInput = {
  currency?: string | null;
  dateFormat?: string | null;
  name?: string | null;
  rating?: number | null;
  ratingData?: JsonValue | null;
  shipmentDays?: number | null;
  technologies?: JsonValue | null;
  type?: string | null;
  workingDays?: JsonValue | null;
};
