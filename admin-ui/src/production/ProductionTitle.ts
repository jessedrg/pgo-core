import { Production as TProduction } from "../api/production/Production";

export const PRODUCTION_TITLE_FIELD = "id";

export const ProductionTitle = (record: TProduction): string => {
  return record.id || record.id;
};
