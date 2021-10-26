import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type QuoteItemWhereInput = {
  basePrices?: FloatNullableFilter;
  constructionType?: StringNullableFilter;
  id?: StringFilter;
  margins?: FloatNullableFilter;
  partId?: PartWhereUniqueInput;
  prices?: FloatNullableFilter;
  productionDays?: IntNullableFilter;
  quantities?: IntNullableFilter;
  status?: "pending" | "completed" | "rejected" | "canceled";
};
