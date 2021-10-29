import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type UserCreateInput = {
  account?: AccountWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  password: string;
  roles: Array<string>;
  username: string;
};
