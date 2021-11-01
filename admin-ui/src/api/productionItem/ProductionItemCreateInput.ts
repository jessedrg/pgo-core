import { ProductionWhereUniqueInput } from "../production/ProductionWhereUniqueInput";

export type ProductionItemCreateInput = {
  production?: ProductionWhereUniqueInput | null;
  quantity?: number | null;
  shippedQuantity?: number | null;
};
