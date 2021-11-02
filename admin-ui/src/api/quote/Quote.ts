import { Account } from "../account/Account";
import { Provider } from "../provider/Provider";
import { QuoteItem } from "../quoteItem/QuoteItem";

export type Quote = {
  account?: Account | null;
  completedAt: Date | null;
  createdAt: Date;
  id: string;
  provider?: Provider | null;
  quoteItems?: Array<QuoteItem>;
  status?: Array<"pending" | "completed" | "canceled" | "rejected">;
  updatedAt: Date;
};
