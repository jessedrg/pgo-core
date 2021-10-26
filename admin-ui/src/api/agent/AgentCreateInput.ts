import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { JsonValue } from "type-fest";

export type AgentCreateInput = {
  accountId?: AccountWhereUniqueInput | null;
  zones?: JsonValue | null;
};
