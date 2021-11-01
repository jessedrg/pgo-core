import { OfferWhereUniqueInput } from "../offer/OfferWhereUniqueInput";
import { PartConfigurationWhereUniqueInput } from "../partConfiguration/PartConfigurationWhereUniqueInput";
import { PartOnShapeWhereUniqueInput } from "../partOnShape/PartOnShapeWhereUniqueInput";
import { JsonValue } from "type-fest";

export type PartUpdateInput = {
  offer?: OfferWhereUniqueInput | null;
  partConfiguration?: PartConfigurationWhereUniqueInput | null;
  partOnShape?: PartOnShapeWhereUniqueInput | null;
  parts?: number | null;
  process?: string | null;
  quantities?: JsonValue | null;
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
