import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";

export type OrderItemCreateInput = {
  orderId?: OrderWhereUniqueInput | null;
  partId?: PartWhereUniqueInput | null;
  price?: number | null;
  quantity?: number | null;
  total?: number | null;
};
