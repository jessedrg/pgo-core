import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { JsonNullableFilter } from "../../util/JsonNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProviderWhereInput = {
  currency?: StringNullableFilter;
  dateFormat?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  rating?: FloatNullableFilter;
  ratingData?: JsonNullableFilter;
  shipmentDays?: IntNullableFilter;
  technologies?: JsonNullableFilter;
  type?: StringNullableFilter;
  workingDays?: JsonNullableFilter;
};
