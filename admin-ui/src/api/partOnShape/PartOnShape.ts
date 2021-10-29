import { Part } from "../part/Part";

export type PartOnShape = {
  createdAt: Date;
  did: string | null;
  eid: string | null;
  id: string;
  part?: Part | null;
  parts?: Array<Part>;
  updatedAt: Date;
  wid: string | null;
};
