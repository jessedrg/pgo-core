import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PartConfigurationWhereInput = {
  colorFinish?: StringNullableFilter;
  finish?: StringNullableFilter;
  hardness?: StringNullableFilter;
  id?: StringFilter;
  material?: StringNullableFilter;
  materialType?: StringNullableFilter;
  tech?: StringNullableFilter;
  tolerance?: FloatNullableFilter;
  weight?: FloatNullableFilter;
};
