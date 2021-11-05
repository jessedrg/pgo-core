import { Holiday } from "../holiday/Holiday";
import { QuoteItem } from "../quoteItem/QuoteItem";
import { Quote } from "../quote/Quote";
import { JsonValue } from "type-fest";

export type Provider = {
  createdAt: Date;
  currency: string | null;
  dateFormat: string | null;
  holidays?: Array<Holiday>;
  id: string;
  name: string | null;
  quoteItems?: Array<QuoteItem>;
  quotes?: Array<Quote>;
  rating: number | null;
  ratingData: JsonValue | null;
  shipmentDays: number | null;
  technologies: JsonValue | null;
  type: string | null;
  updatedAt: Date;
  workingDays: JsonValue | null;
};
