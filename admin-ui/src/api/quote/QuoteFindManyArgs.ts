import { QuoteWhereInput } from "./QuoteWhereInput";
import { QuoteOrderByInput } from "./QuoteOrderByInput";

export type QuoteFindManyArgs = {
  where?: QuoteWhereInput;
  orderBy?: QuoteOrderByInput;
  skip?: number;
  take?: number;
};
