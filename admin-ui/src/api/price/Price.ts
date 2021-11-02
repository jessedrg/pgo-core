import { QuoteItem } from "../quoteItem/QuoteItem";

export type Price = {
  amount: number | null;
  createdAt: Date;
  currency: string | null;
  id: string;
  quantity: number | null;
  quoteItemBasePrices?: Array<QuoteItem>;
  quoteItemPrices?: Array<QuoteItem>;
  updatedAt: Date;
};
