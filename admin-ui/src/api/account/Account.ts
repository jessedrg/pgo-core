import { JsonValue } from "type-fest";
import { Offer } from "../offer/Offer";
import { PartMessage } from "../partMessage/PartMessage";
import { Quote } from "../quote/Quote";
import { User } from "../user/User";

export type Account = {
  active: boolean | null;
  configuration: JsonValue | null;
  createdAt: Date;
  email: string;
  id: string;
  offers?: Array<Offer>;
  partMessages?: Array<PartMessage>;
  partSender?: Array<PartMessage>;
  quotes?: Array<Quote>;
  updatedAt: Date;
  users?: Array<User>;
};
