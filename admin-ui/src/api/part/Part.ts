import { Offer } from "../offer/Offer";
import { PartConfiguration } from "../partConfiguration/PartConfiguration";
import { PartMessage } from "../partMessage/PartMessage";
import { PartOnShape } from "../partOnShape/PartOnShape";
import { JsonValue } from "type-fest";
import { Quote } from "../quote/Quote";

export type Part = {
  createdAt: Date;
  id: string;
  offer?: Offer | null;
  partConfiguration?: PartConfiguration | null;
  partMessages?: Array<PartMessage>;
  partOnShape?: PartOnShape | null;
  parts: number | null;
  process: string | null;
  quantities: JsonValue | null;
  quotes?: Array<Quote>;
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
