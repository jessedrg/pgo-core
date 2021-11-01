import { Account } from "../account/Account";
import { Address } from "../address/Address";
import { Order } from "../order/Order";

export type Organization = {
  accounts?: Array<Account>;
  address?: Address | null;
  createdAt: Date;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
