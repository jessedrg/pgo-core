import { OrganizationPaymentMethodWhereUniqueInput } from "../organizationPaymentMethod/OrganizationPaymentMethodWhereUniqueInput";

export type OrganizationCreateInput = {
  name?: string | null;
  paymentMethod?: OrganizationPaymentMethodWhereUniqueInput | null;
};
