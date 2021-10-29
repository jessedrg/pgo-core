export type QuoteItem = {
  basePrices: number | null;
  constructionType: string | null;
  createdAt: Date;
  id: string;
  margins: number | null;
  prices: number | null;
  productionDays: number | null;
  quantities: number | null;
  status?: "pending" | "completed" | "rejected" | "canceled" | null;
  updatedAt: Date;
};
