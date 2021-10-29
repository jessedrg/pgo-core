import { JsonValue } from "type-fest";

export type Agent = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  zones: JsonValue | null;
};
