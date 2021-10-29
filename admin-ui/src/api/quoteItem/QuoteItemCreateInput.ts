import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type QuoteItemCreateInput = {
  basePrices?: number | null;
  constructionType?: string | null;
  margins?: number | null;
  part?: PartWhereUniqueInput | null;
  prices?: number | null;
  productionDays?: number | null;
  provider?: ProviderWhereUniqueInput | null;
  quantities?: number | null;
  status?: "pending" | "completed" | "rejected" | "canceled" | null;
};
