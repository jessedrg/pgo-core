import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { JsonNullableFilter } from "../../util/JsonNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AccountPaymentMethodWhereInput = {
  accountId?: AccountWhereUniqueInput;
  data?: JsonNullableFilter;
  id?: StringFilter;
  organizationId?: OrganizationWhereUniqueInput;
  type?: StringNullableFilter;
};
