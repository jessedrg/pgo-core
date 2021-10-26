import { Order } from "../order/Order";
import { Part } from "../part/Part";
import { ProductionItem } from "../productionItem/ProductionItem";
import { Provider } from "../provider/Provider";

export type Production = {
  createdAt: Date;
  discomformity: boolean | null;
  id: string;
  orderId?: Order | null;
  partId?: Part | null;
  productionItemInProduction?: Array<ProductionItem>;
  providerId?: Provider | null;
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
