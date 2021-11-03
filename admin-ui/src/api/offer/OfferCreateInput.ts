import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type OfferCreateInput = {
  account?: AccountWhereUniqueInput | null;
  customCode?: string | null;
  publishedAt?: Date | null;
  status?: "draft" | "pending" | "publish" | "rejected" | null;
};
