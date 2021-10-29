import { Address } from "../address/Address";
import { Order } from "../order/Order";
import { User } from "../user/User";

export type Organization = {
  addres: string | null;
  address?: Address | null;
  createdAt: Date;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
  users?: Array<User>;
};
