import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductionCreateInput = {
  account?: AccountWhereUniqueInput | null;
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
