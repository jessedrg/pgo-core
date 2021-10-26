import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type QuoteCreateInput = {
  accountId?: AccountWhereUniqueInput | null;
  completedAt?: Date | null;
  providerId?: ProviderWhereUniqueInput | null;
  status?: Array<"pending" | "completed" | "canceled" | "rejected">;
};
