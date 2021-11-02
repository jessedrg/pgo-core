import { Margin as TMargin } from "../api/margin/Margin";

export const MARGIN_TITLE_FIELD = "id";

export const MarginTitle = (record: TMargin): string => {
  return record.id || record.id;
};
