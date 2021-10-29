import { JsonValue } from "type-fest";

export type Account = {
  active: boolean | null;
  configuration: JsonValue | null;
  createdAt: Date;
  email: string;
  id: string;
  updatedAt: Date;
};
