import { StringFilter } from "../../util/StringFilter";
import { OfferWhereUniqueInput } from "../offer/OfferWhereUniqueInput";
import { PartConfigurationWhereUniqueInput } from "../partConfiguration/PartConfigurationWhereUniqueInput";
import { PartOnShapeWhereUniqueInput } from "../partOnShape/PartOnShapeWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonNullableFilter } from "../../util/JsonNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type PartWhereInput = {
  id?: StringFilter;
  offer?: OfferWhereUniqueInput;
  partConfiguration?: PartConfigurationWhereUniqueInput;
  partOnShape?: PartOnShapeWhereUniqueInput;
  parts?: IntNullableFilter;
  process?: StringNullableFilter;
  quantities?: JsonNullableFilter;
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
