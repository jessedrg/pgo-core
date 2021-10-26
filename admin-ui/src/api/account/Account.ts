import { Offer } from "../offer/Offer";
import { Order } from "../order/Order";
import { Agent } from "../agent/Agent";
import { Payment } from "../payment/Payment";
import { AccountPaymentMethod } from "../accountPaymentMethod/AccountPaymentMethod";
import { JsonValue } from "type-fest";
import { Invite } from "../invite/Invite";
import { PartMessage } from "../partMessage/PartMessage";
import { Quote } from "../quote/Quote";
import { User } from "../user/User";

export type Account = {
  account?: Array<Offer>;
  accountIdInOrder?: Array<Order>;
  accountInAgent?: Array<Agent>;
  accountInPayment?: Array<Payment>;
  accountPaymentMethodsInAccount?: Array<AccountPaymentMethod>;
  active: boolean | null;
  configuration: JsonValue | null;
  createdAt: Date;
  email: string;
  id: string;
  invitesInAccount?: Array<Invite>;
  partMessagesInReciever?: Array<PartMessage>;
  partMessagesInSender?: Array<PartMessage>;
  quote?: Array<Quote>;
  updatedAt: Date;
  usersInAccount?: Array<User>;
};
