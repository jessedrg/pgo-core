import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type InviteCreateInput = {
  accountId?: AccountWhereUniqueInput | null;
  active?: boolean | null;
  email?: string | null;
  expiresAt?: Date | null;
};
