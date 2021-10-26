import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";

export type OfferUpdateInput = {
  accountId?: AccountWhereUniqueInput | null;
  customNo?: string | null;
  partId?: PartWhereUniqueInput | null;
  publishedAt?: Date | null;
  status?: "draft" | "pending" | "publish" | "rejected" | null;
};
