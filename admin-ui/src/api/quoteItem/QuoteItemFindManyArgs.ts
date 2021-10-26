import { QuoteItemWhereInput } from "./QuoteItemWhereInput";
import { QuoteItemOrderByInput } from "./QuoteItemOrderByInput";

export type QuoteItemFindManyArgs = {
  where?: QuoteItemWhereInput;
  orderBy?: QuoteItemOrderByInput;
  skip?: number;
  take?: number;
};
