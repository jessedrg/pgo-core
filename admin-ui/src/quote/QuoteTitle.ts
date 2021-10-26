import { Quote as TQuote } from "../api/quote/Quote";

export const QUOTE_TITLE_FIELD = "id";

export const QuoteTitle = (record: TQuote): string => {
  return record.id || record.id;
};
