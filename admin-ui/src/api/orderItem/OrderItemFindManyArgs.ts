import { OrderItemWhereInput } from "./OrderItemWhereInput";
import { OrderItemOrderByInput } from "./OrderItemOrderByInput";

export type OrderItemFindManyArgs = {
  where?: OrderItemWhereInput;
  orderBy?: OrderItemOrderByInput;
  skip?: number;
  take?: number;
};
