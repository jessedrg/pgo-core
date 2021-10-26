import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type QuoteUpdateInput = {
  accountId?: AccountWhereUniqueInput | null;
  completedAt?: Date | null;
  providerId?: ProviderWhereUniqueInput | null;
  status?: Array<"pending" | "completed" | "canceled" | "rejected">;
};
