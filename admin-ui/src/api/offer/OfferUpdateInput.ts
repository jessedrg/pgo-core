import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type OfferUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  customNumber?: string | null;
  publishedAt?: Date | null;
  status?: "draft" | "pending" | "publish" | "rejected" | null;
};
