import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type UserUpdateInput = {
  accountId?: AccountWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  organizationId?: OrganizationWhereUniqueInput | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
