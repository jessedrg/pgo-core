import { Part } from "../part/Part";

export type PartOnShape = {
  createdAt: Date;
  did: string | null;
  eid: string | null;
  id: string;
  partId?: Part | null;
  updatedAt: Date;
  wid: string | null;
};
