import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";

export type InviteUpdateInput = {
  accountId?: AccountWhereUniqueInput | null;
  active?: boolean | null;
  email?: string | null;
  expiresAt?: Date | null;
};
