import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";

export type QuoteItemCreateInput = {
  basePrices?: number | null;
  constructionType?: string | null;
  margins?: number | null;
  partId?: PartWhereUniqueInput | null;
  prices?: number | null;
  productionDays?: number | null;
  quantities?: number | null;
  status?: "pending" | "completed" | "rejected" | "canceled" | null;
};
