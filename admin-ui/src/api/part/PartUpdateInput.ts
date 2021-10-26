import { JsonValue } from "type-fest";

export type PartUpdateInput = {
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
