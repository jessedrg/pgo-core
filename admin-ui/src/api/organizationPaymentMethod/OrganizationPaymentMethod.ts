import { JsonValue } from "type-fest";
import { Organization } from "../organization/Organization";

export type OrganizationPaymentMethod = {
  createdAt: Date;
  data: JsonValue | null;
  id: string;
  organization?: Array<Organization>;
  type?: "bankAccount" | "card" | "deferred" | "paypal" | null;
  updatedAt: Date;
};
