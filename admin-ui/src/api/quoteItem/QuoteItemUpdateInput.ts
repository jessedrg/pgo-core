import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";
import { QuoteWhereUniqueInput } from "../quote/QuoteWhereUniqueInput";

export type QuoteItemUpdateInput = {
  constructionType?: string | null;
  margins?: number | null;
  part?: PartWhereUniqueInput | null;
  productionDays?: number | null;
  provider?: ProviderWhereUniqueInput | null;
  quantities?: number | null;
  quote?: QuoteWhereUniqueInput | null;
  status?: "pending" | "completed" | "rejected" | "canceled" | null;
};
