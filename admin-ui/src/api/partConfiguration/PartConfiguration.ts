import { Part } from "../part/Part";

export type PartConfiguration = {
  colorFinish: string | null;
  createdAt: Date;
  finish: string | null;
  hardness: string | null;
  id: string;
  material: string | null;
  materialType: string | null;
  partId?: Part | null;
  tech: string | null;
  tolerance: number | null;
  updatedAt: Date;
  weight: number | null;
};
