import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "comment";

export const OrderTitle = (record: TOrder): string => {
  return record.comment || record.id;
};
