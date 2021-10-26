import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type QuoteCreateInput = {
  accountId?: AccountWhereUniqueInput | null;
  completedAt?: Date | null;
  status?: Array<"pending" | "completed" | "canceled" | "rejected">;
};
