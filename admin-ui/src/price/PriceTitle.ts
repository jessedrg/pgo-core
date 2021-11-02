import { Price as TPrice } from "../api/price/Price";

export const PRICE_TITLE_FIELD = "currency";

export const PriceTitle = (record: TPrice): string => {
  return record.currency || record.id;
};
