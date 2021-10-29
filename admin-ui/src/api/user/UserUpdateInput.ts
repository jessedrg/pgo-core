import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type UserUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
