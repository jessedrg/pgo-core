import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderItemUpdateInput = {
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
  quantity?: number | null;
  total?: number | null;
};
