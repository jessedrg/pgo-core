import { StringFilter } from "../../util/StringFilter";
import { ProductionWhereUniqueInput } from "../production/ProductionWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductionItemWhereInput = {
  id?: StringFilter;
  production?: ProductionWhereUniqueInput;
  quantity?: IntNullableFilter;
  shippedQuantity?: IntNullableFilter;
};
