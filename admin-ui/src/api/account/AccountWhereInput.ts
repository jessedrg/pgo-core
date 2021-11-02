import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountWhereInput = {
  active?: BooleanNullableFilter;
  agent?: AgentWhereUniqueInput;
  email?: StringFilter;
  id?: StringFilter;
  organization?: OrganizationWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
