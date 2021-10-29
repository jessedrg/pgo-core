import { JsonNullableFilter } from "../../util/JsonNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AccountPaymentMethodWhereInput = {
  data?: JsonNullableFilter;
  id?: StringFilter;
  type?: StringNullableFilter;
};
