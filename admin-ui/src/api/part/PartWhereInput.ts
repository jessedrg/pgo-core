import { StringFilter } from "../../util/StringFilter";
import { OfferWhereUniqueInput } from "../offer/OfferWhereUniqueInput";
import { PartOnShapeWhereUniqueInput } from "../partOnShape/PartOnShapeWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonNullableFilter } from "../../util/JsonNullableFilter";
import { QuoteWhereUniqueInput } from "../quote/QuoteWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type PartWhereInput = {
  id?: StringFilter;
  offer?: OfferWhereUniqueInput;
  partonshape?: PartOnShapeWhereUniqueInput;
  parts?: IntNullableFilter;
  process?: StringNullableFilter;
  quantities?: JsonNullableFilter;
  quote?: QuoteWhereUniqueInput;
  status?: "draft" | "pending" | "rejected" | "publish";
  surface?: FloatNullableFilter;
  visible?: BooleanNullableFilter;
  volume?: FloatNullableFilter;
  volumeBoundingBox?: FloatNullableFilter;
  volumeChips?: FloatNullableFilter;
  x?: FloatNullableFilter;
  y?: FloatNullableFilter;
  z?: FloatNullableFilter;
};
