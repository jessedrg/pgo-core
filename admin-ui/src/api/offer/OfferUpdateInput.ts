import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type OfferUpdateInput = {
  accountId?: AccountWhereUniqueInput | null;
  customNo?: string | null;
  publishedAt?: Date | null;
  status?: "draft" | "pending" | "publish" | "rejected" | null;
};
