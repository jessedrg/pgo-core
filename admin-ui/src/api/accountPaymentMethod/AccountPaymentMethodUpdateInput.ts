import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { JsonValue } from "type-fest";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type AccountPaymentMethodUpdateInput = {
  accountId?: AccountWhereUniqueInput | null;
  data?: JsonValue | null;
  organizationId?: OrganizationWhereUniqueInput | null;
  type?: string | null;
};
