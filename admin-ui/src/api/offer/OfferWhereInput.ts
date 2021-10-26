import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type OfferWhereInput = {
  accountId?: AccountWhereUniqueInput;
  customNo?: StringNullableFilter;
  id?: StringFilter;
  partId?: PartWhereUniqueInput;
  publishedAt?: DateTimeNullableFilter;
  status?: "draft" | "pending" | "publish" | "rejected";
};
