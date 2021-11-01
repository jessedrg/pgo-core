import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { JsonValue } from "type-fest";

export type AgentUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  zones?: JsonValue | null;
};
