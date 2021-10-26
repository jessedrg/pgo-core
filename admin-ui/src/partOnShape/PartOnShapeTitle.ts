import { PartOnShape as TPartOnShape } from "../api/partOnShape/PartOnShape";

export const PARTONSHAPE_TITLE_FIELD = "did";

export const PartOnShapeTitle = (record: TPartOnShape): string => {
  return record.did || record.id;
};
