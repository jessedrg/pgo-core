import { Account } from "../account/Account";

export type Quote = {
  accountId?: Account | null;
  completedAt: Date | null;
  createdAt: Date;
  id: string;
  status?: Array<"pending" | "completed" | "canceled" | "rejected">;
  updatedAt: Date;
};
