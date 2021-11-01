import { JsonValue } from "type-fest";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type AccountUpdateInput = {
  active?: boolean | null;
  configuration?: JsonValue | null;
  email?: string;
  organization?: OrganizationWhereUniqueInput | null;
};
