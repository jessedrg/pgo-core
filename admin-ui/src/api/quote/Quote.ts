import { Account } from "../account/Account";
import { Part } from "../part/Part";
import { Provider } from "../provider/Provider";

export type Quote = {
  account?: Account | null;
  completedAt: Date | null;
  createdAt: Date;
  id: string;
  parts?: Array<Part>;
  provider?: Provider | null;
  status?: Array<"pending" | "completed" | "canceled" | "rejected">;
  updatedAt: Date;
};
