import { JsonValue } from "type-fest";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type AccountCreateInput = {
  active?: boolean | null;
  configuration?: JsonValue | null;
  email: string;
  organization?: OrganizationWhereUniqueInput | null;
};
