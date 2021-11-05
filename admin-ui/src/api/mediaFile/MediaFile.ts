import { Part } from "../part/Part";

export type MediaFile = {
  blueprintInPart?: Array<Part>;
  createdAt: Date;
  fileName: string | null;
  id: string;
  originalBluePrintInPart?: Array<Part>;
  originalModelInPart?: Array<Part>;
  stepModelInPart?: Array<Part>;
  stlModelInPart?: Array<Part>;
  type: string | null;
  updatedAt: Date;
  url: string | null;
};
