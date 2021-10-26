import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";

export type PartOnShapeWhereInput = {
  did?: StringNullableFilter;
  eid?: StringNullableFilter;
  id?: StringFilter;
  partId?: PartWhereUniqueInput;
  wid?: StringNullableFilter;
};
