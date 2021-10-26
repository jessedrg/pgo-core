import { Account } from "../account/Account";
import { JsonValue } from "type-fest";

export type Agent = {
  accountId?: Account | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  zones: JsonValue | null;
};
