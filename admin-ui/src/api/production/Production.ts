import { Account } from "../account/Account";
import { Order } from "../order/Order";
import { ProductionItem } from "../productionItem/ProductionItem";
import { Shipment } from "../shipment/Shipment";

export type Production = {
  account?: Account | null;
  createdAt: Date;
  discomformity: boolean | null;
  id: string;
  order?: Order | null;
  productionItems?: Array<ProductionItem>;
  shipments?: Array<Shipment>;
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
