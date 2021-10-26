import { ProductionItem } from "../productionItem/ProductionItem";

export type Production = {
  createdAt: Date;
  discomformity: boolean | null;
  id: string;
  parentId?: Production | null;
  production?: Array<Production>;
  productionItemInProduction?: Array<ProductionItem>;
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
