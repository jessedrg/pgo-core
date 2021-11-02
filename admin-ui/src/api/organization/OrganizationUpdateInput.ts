import { OrganizationPaymentMethodWhereUniqueInput } from "../organizationPaymentMethod/OrganizationPaymentMethodWhereUniqueInput";

export type OrganizationUpdateInput = {
  name?: string | null;
  paymentMethod?: OrganizationPaymentMethodWhereUniqueInput | null;
};
