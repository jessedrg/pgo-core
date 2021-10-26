import { Part as TPart } from "../api/part/Part";

export const PART_TITLE_FIELD = "process";

export const PartTitle = (record: TPart): string => {
  return record.process || record.id;
};
