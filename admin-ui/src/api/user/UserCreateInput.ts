import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type UserCreateInput = {
  account?: AccountWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
