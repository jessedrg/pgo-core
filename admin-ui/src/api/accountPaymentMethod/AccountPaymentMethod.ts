import { Account } from "../account/Account";
import { JsonValue } from "type-fest";
import { Organization } from "../organization/Organization";

export type AccountPaymentMethod = {
  accountId?: Account | null;
  createdAt: Date;
  data: JsonValue | null;
  id: string;
  organizationId?: Organization | null;
  organizationsInPaymentMethod?: Array<Organization>;
  type: string | null;
  updatedAt: Date;
};
