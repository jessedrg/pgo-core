import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PartMessageWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  messageType?: StringNullableFilter;
  type?: StringNullableFilter;
};
