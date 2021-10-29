import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";

export type QuoteItemWhereInput = {
  basePrices?: FloatNullableFilter;
  constructionType?: StringNullableFilter;
  id?: StringFilter;
  margins?: FloatNullableFilter;
  part?: PartWhereUniqueInput;
  prices?: FloatNullableFilter;
  productionDays?: IntNullableFilter;
  provider?: ProviderWhereUniqueInput;
  quantities?: IntNullableFilter;
  status?: "pending" | "completed" | "rejected" | "canceled";
};
