import { Part } from "../part/Part";
import { Production } from "../production/Production";

export type ProductionItem = {
  createdAt: Date;
  id: string;
  part?: Part | null;
  production?: Production | null;
  quantity: number | null;
  shippedQuantity: number | null;
  updatedAt: Date;
};
