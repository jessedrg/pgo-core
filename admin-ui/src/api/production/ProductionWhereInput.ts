import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ProductionWhereInput = {
  account?: AccountWhereUniqueInput;
  discomformity?: BooleanNullableFilter;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  status?:
    | "pending"
    | "processing"
    | "shipped"
    | "quality"
    | "completed"
    | "canceled"
    | "rejected";
};
