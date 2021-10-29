import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderItemCreateInput = {
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  quantity?: number | null;
  total?: number | null;
};
