import { PartConfiguration } from "../partConfiguration/PartConfiguration";
import { ProductionItem } from "../productionItem/ProductionItem";
import { PartOnShape } from "../partOnShape/PartOnShape";
import { JsonValue } from "type-fest";
import { QuoteItem } from "../quoteItem/QuoteItem";

export type Part = {
  createdAt: Date;
  id: string;
  part?: Array<PartConfiguration>;
  partInProduction?: Array<ProductionItem>;
  partOnShape?: Array<PartOnShape>;
  parts: number | null;
  process: string | null;
  quantities: JsonValue | null;
  quoteItem?: Array<QuoteItem>;
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
