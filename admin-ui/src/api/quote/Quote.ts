import { Account } from "../account/Account";
import { Provider } from "../provider/Provider";

export type Quote = {
  accountId?: Account | null;
  completedAt: Date | null;
  createdAt: Date;
  id: string;
  providerId?: Provider | null;
  status?: Array<"pending" | "completed" | "canceled" | "rejected">;
  updatedAt: Date;
};
