import { StringFilter } from "../../util/StringFilter";
import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductionItemWhereInput = {
  id?: StringFilter;
  part?: PartWhereUniqueInput;
  quantity?: IntNullableFilter;
  shippedQuantity?: IntNullableFilter;
};
