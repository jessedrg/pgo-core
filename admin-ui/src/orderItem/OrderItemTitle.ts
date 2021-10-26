import { OrderItem as TOrderItem } from "../api/orderItem/OrderItem";

export const ORDERITEM_TITLE_FIELD = "id";

export const OrderItemTitle = (record: TOrderItem): string => {
  return record.id || record.id;
};
