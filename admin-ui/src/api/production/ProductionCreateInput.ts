import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductionCreateInput = {
  discomformity?: boolean | null;
  order?: OrderWhereUniqueInput | null;
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
