import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductionWhereUniqueInput } from "./ProductionWhereUniqueInput";

export type ProductionWhereInput = {
  discomformity?: BooleanNullableFilter;
  id?: StringFilter;
  parentId?: ProductionWhereUniqueInput;
  status?:
    | "pending"
    | "processing"
    | "shipped"
    | "quality"
    | "completed"
    | "canceled"
    | "rejected";
};
