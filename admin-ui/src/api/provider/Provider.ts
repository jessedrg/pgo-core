import { JsonValue } from "type-fest";

export type Provider = {
  createdAt: Date;
  currency: string | null;
  dateFormat: string | null;
  id: string;
  name: string | null;
  rating: number | null;
  ratingData: JsonValue | null;
  shippmentDates: number | null;
  technologies: JsonValue | null;
  typeson: string | null;
  updatedAt: Date;
  workingDays: JsonValue | null;
};
