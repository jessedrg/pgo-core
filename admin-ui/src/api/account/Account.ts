import { Agent } from "../agent/Agent";
import { JsonValue } from "type-fest";
import { Offer } from "../offer/Offer";
import { Organization } from "../organization/Organization";
import { PartMessage } from "../partMessage/PartMessage";
import { Part } from "../part/Part";
import { Production } from "../production/Production";
import { Quote } from "../quote/Quote";
import { User } from "../user/User";

export type Account = {
  active: boolean | null;
  agent?: Agent | null;
  configuration: JsonValue | null;
  createdAt: Date;
  email: string;
  id: string;
  offers?: Array<Offer>;
  organization?: Organization | null;
  partMessages?: Array<PartMessage>;
  parts?: Array<Part>;
  productions?: Array<Production>;
  quotes?: Array<Quote>;
  updatedAt: Date;
  user?: User | null;
};
