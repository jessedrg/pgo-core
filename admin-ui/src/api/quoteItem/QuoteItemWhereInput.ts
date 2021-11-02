import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PartWhereUniqueInput } from "../part/PartWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";
import { QuoteWhereUniqueInput } from "../quote/QuoteWhereUniqueInput";

export type QuoteItemWhereInput = {
  constructionType?: StringNullableFilter;
  id?: StringFilter;
  margins?: FloatNullableFilter;
  part?: PartWhereUniqueInput;
  productionDays?: IntNullableFilter;
  provider?: ProviderWhereUniqueInput;
  quantities?: IntNullableFilter;
  quote?: QuoteWhereUniqueInput;
  status?: "pending" | "completed" | "rejected" | "canceled";
};
