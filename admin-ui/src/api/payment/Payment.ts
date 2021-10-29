export type Payment = {
  createdAt: Date;
  id: string;
  status?: "pending" | "completed" | "rejected" | null;
  transactionId: string | null;
  transactionUserId: string | null;
  updatedAt: Date;
};
