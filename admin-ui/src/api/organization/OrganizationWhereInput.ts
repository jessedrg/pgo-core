import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrganizationPaymentMethodWhereUniqueInput } from "../organizationPaymentMethod/OrganizationPaymentMethodWhereUniqueInput";

export type OrganizationWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  paymentMethod?: OrganizationPaymentMethodWhereUniqueInput;
};
