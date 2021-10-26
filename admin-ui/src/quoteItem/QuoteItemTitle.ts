import { QuoteItem as TQuoteItem } from "../api/quoteItem/QuoteItem";

export const QUOTEITEM_TITLE_FIELD = "constructionType";

export const QuoteItemTitle = (record: TQuoteItem): string => {
  return record.constructionType || record.id;
};
