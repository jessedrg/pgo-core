import { JsonValue } from "type-fest";

export type AccountCreateInput = {
  active?: boolean | null;
  configuration?: JsonValue | null;
  email: string;
};
