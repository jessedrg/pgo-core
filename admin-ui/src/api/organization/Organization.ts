import { AccountPaymentMethod } from "../accountPaymentMethod/AccountPaymentMethod";
import { Address } from "../address/Address";
import { Order } from "../order/Order";
import { User } from "../user/User";

export type Organization = {
  accountPaymentMethodInOrganization?: Array<AccountPaymentMethod>;
  contactAdressId?: Address | null;
  createdAt: Date;
  id: string;
  name: string | null;
  organizationInOrder?: Array<Order>;
  paymenMethodId?: AccountPaymentMethod | null;
  updatedAt: Date;
  usersInOrganization?: Array<User>;
};
