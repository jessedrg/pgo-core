import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";
import { QuoteWhereUniqueInput } from "../quote/QuoteWhereUniqueInput";

export type QuoteItemWhereInput = {
  basePrices?: FloatNullableFilter;
  constructionType?: StringNullableFilter;
  id?: StringFilter;
  margins?: FloatNullableFilter;
  prices?: FloatNullableFilter;
  productionDays?: IntNullableFilter;
  provider?: ProviderWhereUniqueInput;
  quantities?: IntNullableFilter;
  quote?: QuoteWhereUniqueInput;
  status?: "pending" | "completed" | "rejected" | "canceled";
};
