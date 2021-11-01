import { ProductionWhereUniqueInput } from "../production/ProductionWhereUniqueInput";

export type ProductionItemUpdateInput = {
  production?: ProductionWhereUniqueInput | null;
  quantity?: number | null;
  shippedQuantity?: number | null;
};
