import { Account } from "../account/Account";

export type Invite = {
  accountId?: Account | null;
  active: boolean | null;
  createdAt: Date;
  email: string | null;
  expiresAt: Date | null;
  id: string;
  updatedAt: Date;
};
