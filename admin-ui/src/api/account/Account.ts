import { Agent } from "../agent/Agent";
import { JsonValue } from "type-fest";
import { Offer } from "../offer/Offer";
import { Organization } from "../organization/Organization";
import { PartMessage } from "../partMessage/PartMessage";
import { Quote } from "../quote/Quote";
import { User } from "../user/User";

export type Account = {
  active: boolean | null;
  agents?: Array<Agent>;
  configuration: JsonValue | null;
  createdAt: Date;
  email: string;
  id: string;
  offers?: Array<Offer>;
  organization?: Organization | null;
  partMessages?: Array<PartMessage>;
  partSender?: Array<PartMessage>;
  quotes?: Array<Quote>;
  updatedAt: Date;
  users?: Array<User>;
};
