export type Quote = {
  completedAt: Date | null;
  createdAt: Date;
  id: string;
  status?: Array<"pending" | "completed" | "canceled" | "rejected">;
  updatedAt: Date;
};
