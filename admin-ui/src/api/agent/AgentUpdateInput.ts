import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { JsonValue } from "type-fest";

export type AgentUpdateInput = {
  accountId?: AccountWhereUniqueInput | null;
  zones?: JsonValue | null;
};
