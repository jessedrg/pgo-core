import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductionItemWhereInput = {
  id?: StringFilter;
  quantity?: IntNullableFilter;
  shippedQuantity?: IntNullableFilter;
};
