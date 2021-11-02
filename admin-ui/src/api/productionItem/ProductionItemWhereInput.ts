import { StringFilter } from "../../util/StringFilter";
import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { ProductionWhereUniqueInput } from "../production/ProductionWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductionItemWhereInput = {
  id?: StringFilter;
  part?: PartWhereUniqueInput;
  production?: ProductionWhereUniqueInput;
  quantity?: IntNullableFilter;
  shippedQuantity?: IntNullableFilter;
};
