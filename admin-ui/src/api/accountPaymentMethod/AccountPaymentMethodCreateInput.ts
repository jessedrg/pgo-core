import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { JsonValue } from "type-fest";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type AccountPaymentMethodCreateInput = {
  accountId?: AccountWhereUniqueInput | null;
  data?: JsonValue | null;
  organizationId?: OrganizationWhereUniqueInput | null;
  type?: string | null;
};
