import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MediaFileWhereInput = {
  id?: StringFilter;
  type?: StringNullableFilter;
  url?: StringNullableFilter;
};
