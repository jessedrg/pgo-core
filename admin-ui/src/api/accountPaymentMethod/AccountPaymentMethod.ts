import { JsonValue } from "type-fest";

export type AccountPaymentMethod = {
  createdAt: Date;
  data: JsonValue | null;
  id: string;
  type: string | null;
  updatedAt: Date;
};
