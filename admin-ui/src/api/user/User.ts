import { Account } from "../account/Account";
import { Organization } from "../organization/Organization";
import { Payment } from "../payment/Payment";

export type User = {
  account?: Account | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  organization?: Organization | null;
  payments?: Array<Payment>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
