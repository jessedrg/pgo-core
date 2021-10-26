import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type ProductionWhereInput = {
  discomformity?: BooleanNullableFilter;
  id?: StringFilter;
  orderId?: OrderWhereUniqueInput;
  partId?: PartWhereUniqueInput;
  providerId?: ProviderWhereUniqueInput;
  status?:
    | "pending"
    | "processing"
    | "shipped"
    | "quality"
    | "completed"
    | "canceled"
    | "rejected";
};
