import { PriceWhereInput } from "./PriceWhereInput";
import { PriceOrderByInput } from "./PriceOrderByInput";

export type PriceFindManyArgs = {
  where?: PriceWhereInput;
  orderBy?: PriceOrderByInput;
  skip?: number;
  take?: number;
};
