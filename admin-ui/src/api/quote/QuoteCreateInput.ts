export type QuoteCreateInput = {
  completedAt?: Date | null;
  status?: Array<"pending" | "completed" | "canceled" | "rejected">;
};
