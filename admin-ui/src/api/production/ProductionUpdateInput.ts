import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type ProductionUpdateInput = {
  discomformity?: boolean | null;
  orderId?: OrderWhereUniqueInput | null;
  partId?: PartWhereUniqueInput | null;
  providerId?: ProviderWhereUniqueInput | null;
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
