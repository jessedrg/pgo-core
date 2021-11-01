import { Account } from "../account/Account";
import { Payment } from "../payment/Payment";

export type User = {
  account?: Account | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  payments?: Array<Payment>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
