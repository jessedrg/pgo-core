import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type QuoteItemUpdateInput = {
  basePrices?: number | null;
  constructionType?: string | null;
  margins?: number | null;
  partId?: PartWhereUniqueInput | null;
  prices?: number | null;
  productionDays?: number | null;
  providerId?: ProviderWhereUniqueInput | null;
  quantities?: number | null;
  status?: "pending" | "completed" | "rejected" | "canceled" | null;
};
