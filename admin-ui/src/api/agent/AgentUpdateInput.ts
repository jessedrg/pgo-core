import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { JsonValue } from "type-fest";

export type AgentUpdateInput = {
  account?: AccountWhereUniqueInput;
  zones?: JsonValue | null;
};
