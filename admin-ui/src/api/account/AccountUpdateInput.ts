import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { JsonValue } from "type-fest";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountUpdateInput = {
  active?: boolean | null;
  agent?: AgentWhereUniqueInput | null;
  configuration?: JsonValue | null;
  email?: string;
  organization?: OrganizationWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
