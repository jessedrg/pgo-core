import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type QuoteUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  completedAt?: Date | null;
  provider?: ProviderWhereUniqueInput | null;
  status?: Array<"pending" | "completed" | "canceled" | "rejected">;
};
