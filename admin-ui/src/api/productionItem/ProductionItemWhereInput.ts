import { StringFilter } from "../../util/StringFilter";
import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { ProductionWhereUniqueInput } from "../production/ProductionWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductionItemWhereInput = {
  id?: StringFilter;
  partId?: PartWhereUniqueInput;
  productionId?: ProductionWhereUniqueInput;
  quantity?: IntNullableFilter;
  shippedQuantity?: IntNullableFilter;
};
