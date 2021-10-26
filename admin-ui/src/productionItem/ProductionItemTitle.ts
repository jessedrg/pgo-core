import { ProductionItem as TProductionItem } from "../api/productionItem/ProductionItem";

export const PRODUCTIONITEM_TITLE_FIELD = "id";

export const ProductionItemTitle = (record: TProductionItem): string => {
  return record.id || record.id;
};
