import { Account } from "../account/Account";
import { Part } from "../part/Part";

export type Offer = {
  account?: Account | null;
  createdAt: Date;
  customCode: string | null;
  id: string;
  parts?: Array<Part>;
  publishedAt: Date | null;
  status?: "draft" | "pending" | "publish" | "rejected" | null;
  updatedAt: Date;
};
