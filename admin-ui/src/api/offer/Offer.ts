import { Account } from "../account/Account";
import { Part } from "../part/Part";

export type Offer = {
  accountId?: Account | null;
  createdAt: Date;
  customNo: string | null;
  id: string;
  partId?: Part | null;
  publishedAt: Date | null;
  status?: "draft" | "pending" | "publish" | "rejected" | null;
  updatedAt: Date;
};
