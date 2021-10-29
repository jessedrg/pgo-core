import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";

export type ProductionItemUpdateInput = {
  part?: PartWhereUniqueInput | null;
  quantity?: number | null;
  shippedQuantity?: number | null;
};
