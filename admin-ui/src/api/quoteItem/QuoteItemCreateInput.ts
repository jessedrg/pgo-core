import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";
import { QuoteWhereUniqueInput } from "../quote/QuoteWhereUniqueInput";

export type QuoteItemCreateInput = {
  basePrices?: number | null;
  constructionType?: string | null;
  margins?: number | null;
  prices?: number | null;
  productionDays?: number | null;
  provider?: ProviderWhereUniqueInput | null;
  quantities?: number | null;
  quote?: QuoteWhereUniqueInput | null;
  status?: "pending" | "completed" | "rejected" | "canceled" | null;
};
