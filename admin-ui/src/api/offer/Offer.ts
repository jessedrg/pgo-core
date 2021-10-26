import { Account } from "../account/Account";

export type Offer = {
  accountId?: Account | null;
  createdAt: Date;
  customNo: string | null;
  id: string;
  publishedAt: Date | null;
  status?: "draft" | "pending" | "publish" | "rejected" | null;
  updatedAt: Date;
};
