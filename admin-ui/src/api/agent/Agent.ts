import { Account } from "../account/Account";
import { JsonValue } from "type-fest";

export type Agent = {
  account?: Account;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  zones: JsonValue | null;
};
