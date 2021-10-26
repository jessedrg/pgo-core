import { ProductionItemWhereInput } from "./ProductionItemWhereInput";
import { ProductionItemOrderByInput } from "./ProductionItemOrderByInput";

export type ProductionItemFindManyArgs = {
  where?: ProductionItemWhereInput;
  orderBy?: ProductionItemOrderByInput;
  skip?: number;
  take?: number;
};
