import { OfferWhereUniqueInput } from "../offer/OfferWhereUniqueInput";
import { PartOnShapeWhereUniqueInput } from "../partOnShape/PartOnShapeWhereUniqueInput";
import { JsonValue } from "type-fest";
import { QuoteWhereUniqueInput } from "../quote/QuoteWhereUniqueInput";

export type PartUpdateInput = {
  offer?: OfferWhereUniqueInput | null;
  partonshape?: PartOnShapeWhereUniqueInput | null;
  parts?: number | null;
  process?: string | null;
  quantities?: JsonValue | null;
  quote?: QuoteWhereUniqueInput | null;
  status?: "draft" | "pending" | "rejected" | "publish" | null;
  surface?: number | null;
  visible?: boolean | null;
  volume?: number | null;
  volumeBoundingBox?: number | null;
  volumeChips?: number | null;
  x?: number | null;
  y?: number | null;
  z?: number | null;
};
