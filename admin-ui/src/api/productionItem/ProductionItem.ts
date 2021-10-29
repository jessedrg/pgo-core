import { Part } from "../part/Part";

export type ProductionItem = {
  createdAt: Date;
  id: string;
  part?: Part | null;
  quantity: number | null;
  shippedQuantity: number | null;
  updatedAt: Date;
};
