import { Account } from "../account/Account";
import { Part } from "../part/Part";

export type Offer = {
  account?: Array<Account>;
  createdAt: Date;
  customNumber: string | null;
  id: string;
  parts?: Array<Part>;
  publishedAt: Date | null;
  status?: "draft" | "pending" | "publish" | "rejected" | null;
  updatedAt: Date;
};
