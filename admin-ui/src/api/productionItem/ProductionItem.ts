import { Production } from "../production/Production";

export type ProductionItem = {
  createdAt: Date;
  id: string;
  production?: Production | null;
  quantity: number | null;
  shippedQuantity: number | null;
  updatedAt: Date;
};
