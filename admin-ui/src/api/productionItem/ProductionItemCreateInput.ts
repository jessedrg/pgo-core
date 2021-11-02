import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { ProductionWhereUniqueInput } from "../production/ProductionWhereUniqueInput";

export type ProductionItemCreateInput = {
  part?: PartWhereUniqueInput | null;
  production?: ProductionWhereUniqueInput | null;
  quantity?: number | null;
  shippedQuantity?: number | null;
};
