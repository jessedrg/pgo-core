import { ProductionWhereUniqueInput } from "./ProductionWhereUniqueInput";

export type ProductionCreateInput = {
  discomformity?: boolean | null;
  parentId?: ProductionWhereUniqueInput | null;
  status?:
    | "pending"
    | "processing"
    | "shipped"
    | "quality"
    | "completed"
    | "canceled"
    | "rejected"
    | null;
};
