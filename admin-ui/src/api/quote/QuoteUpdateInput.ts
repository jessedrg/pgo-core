export type QuoteUpdateInput = {
  completedAt?: Date | null;
  status?: Array<"pending" | "completed" | "canceled" | "rejected">;
};
