import { JsonValue } from "type-fest";

export type Part = {
  createdAt: Date;
  id: string;
  parts: number | null;
  process: string | null;
  quantities: JsonValue | null;
  status?: "draft" | "pending" | "rejected" | "publish" | null;
  surface: number | null;
  updatedAt: Date;
  visible: boolean | null;
  volume: number | null;
  volumeBoundingBox: number | null;
  volumeChips: number | null;
  x: number | null;
  y: number | null;
  z: number | null;
};
