import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MediaFileWhereInput = {
  fileName?: StringNullableFilter;
  id?: StringFilter;
  type?: StringNullableFilter;
  url?: StringNullableFilter;
};
