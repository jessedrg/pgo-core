import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PartOnShapeWhereInput = {
  did?: StringNullableFilter;
  eid?: StringNullableFilter;
  id?: StringFilter;
  wid?: StringNullableFilter;
};
