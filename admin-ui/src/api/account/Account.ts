import { Offer } from "../offer/Offer";
import { JsonValue } from "type-fest";
import { Quote } from "../quote/Quote";

export type Account = {
  account?: Array<Offer>;
  active: boolean | null;
  configuration: JsonValue | null;
  createdAt: Date;
  email: string;
  id: string;
  quote?: Array<Quote>;
  updatedAt: Date;
};
