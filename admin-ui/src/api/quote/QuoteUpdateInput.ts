import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type QuoteUpdateInput = {
  accountId?: AccountWhereUniqueInput | null;
  completedAt?: Date | null;
  status?: Array<"pending" | "completed" | "canceled" | "rejected">;
};
