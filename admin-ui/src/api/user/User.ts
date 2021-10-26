import { Account } from "../account/Account";
import { Organization } from "../organization/Organization";
import { Session } from "../session/Session";

export type User = {
  accountId?: Account | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  organizationId?: Organization | null;
  roles: Array<string>;
  sessionsInUser?: Array<Session>;
  updatedAt: Date;
  username: string;
};
