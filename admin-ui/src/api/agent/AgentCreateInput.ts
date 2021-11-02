import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { JsonValue } from "type-fest";

export type AgentCreateInput = {
  account?: AccountWhereUniqueInput;
  zones?: JsonValue | null;
};
