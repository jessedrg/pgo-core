import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type UserUpdateInput = {
  account?: AccountWhereUniqueInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
