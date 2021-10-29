import { Part } from "../part/Part";
import { Provider } from "../provider/Provider";

export type QuoteItem = {
  basePrices: number | null;
  constructionType: string | null;
  createdAt: Date;
  id: string;
  margins: number | null;
  part?: Part | null;
  prices: number | null;
  productionDays: number | null;
  provider?: Provider | null;
  quantities: number | null;
  status?: "pending" | "completed" | "rejected" | "canceled" | null;
  updatedAt: Date;
};
