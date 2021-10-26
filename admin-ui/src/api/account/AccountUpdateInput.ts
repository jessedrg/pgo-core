import { JsonValue } from "type-fest";

export type AccountUpdateInput = {
  active?: boolean | null;
  configuration?: JsonValue | null;
  email?: string;
};
