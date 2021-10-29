import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";

export type ProductionItemCreateInput = {
  part?: PartWhereUniqueInput | null;
  quantity?: number | null;
  shippedQuantity?: number | null;
};
