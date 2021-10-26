import { Holiday as THoliday } from "../api/holiday/Holiday";

export const HOLIDAY_TITLE_FIELD = "id";

export const HolidayTitle = (record: THoliday): string => {
  return record.id || record.id;
};
