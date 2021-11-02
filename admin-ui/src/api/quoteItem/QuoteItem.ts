import { Price } from "../price/Price";
import { Part } from "../part/Part";
import { Provider } from "../provider/Provider";
import { Quote } from "../quote/Quote";

export type QuoteItem = {
  basePrices?: Array<Price>;
  constructionType: string | null;
  createdAt: Date;
  id: string;
  margins: number | null;
  part?: Part | null;
  prices?: Array<Price>;
  productionDays: number | null;
  provider?: Provider | null;
  quantities: number | null;
  quote?: Quote | null;
  status?: "pending" | "completed" | "rejected" | "canceled" | null;
  updatedAt: Date;
};
