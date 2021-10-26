import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { ProductionWhereUniqueInput } from "../production/ProductionWhereUniqueInput";

export type ProductionItemUpdateInput = {
  partId?: PartWhereUniqueInput | null;
  productionId?: ProductionWhereUniqueInput | null;
  quantity?: number | null;
  shippedQuantity?: number | null;
};
