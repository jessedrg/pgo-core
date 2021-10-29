import { Order } from "../order/Order";

export type Production = {
  createdAt: Date;
  discomformity: boolean | null;
  id: string;
  order?: Order | null;
  status?:
    | "pending"
    | "processing"
    | "shipped"
    | "quality"
    | "completed"
    | "canceled"
    | "rejected"
    | null;
  updatedAt: Date;
};
