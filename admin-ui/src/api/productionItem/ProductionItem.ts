import { Part } from "../part/Part";
import { Production } from "../production/Production";

export type ProductionItem = {
  createdAt: Date;
  id: string;
  partId?: Part | null;
  productionId?: Production | null;
  quantity: number | null;
  shippedQuantity: number | null;
  updatedAt: Date;
};
