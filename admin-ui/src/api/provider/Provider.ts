import { Holiday } from "../holiday/Holiday";
import { Production } from "../production/Production";
import { QuoteItem } from "../quoteItem/QuoteItem";
import { Quote } from "../quote/Quote";
import { JsonValue } from "type-fest";

export type Provider = {
  createdAt: Date;
  currency: string | null;
  dateFormat: string | null;
  holidaysId?: Holiday | null;
  id: string;
  name: string | null;
  productionsInProviders?: Array<Production>;
  quoteItemsInProviders?: Array<QuoteItem>;
  quotesInProviders?: Array<Quote>;
  rating: number | null;
  ratingData: JsonValue | null;
  shippmentDates: number | null;
  technologies: JsonValue | null;
  typeson: string | null;
  updatedAt: Date;
  workingDays: JsonValue | null;
};
