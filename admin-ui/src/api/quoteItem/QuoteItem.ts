import { Provider } from "../provider/Provider";
import { Quote } from "../quote/Quote";

export type QuoteItem = {
  basePrices: number | null;
  constructionType: string | null;
  createdAt: Date;
  id: string;
  margins: number | null;
  prices: number | null;
  productionDays: number | null;
  provider?: Provider | null;
  quantities: number | null;
  quote?: Quote | null;
  status?: "pending" | "completed" | "rejected" | "canceled" | null;
  updatedAt: Date;
};
