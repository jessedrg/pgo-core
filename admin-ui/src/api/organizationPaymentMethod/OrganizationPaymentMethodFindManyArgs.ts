import { OrganizationPaymentMethodWhereInput } from "./OrganizationPaymentMethodWhereInput";
import { OrganizationPaymentMethodOrderByInput } from "./OrganizationPaymentMethodOrderByInput";

export type OrganizationPaymentMethodFindManyArgs = {
  where?: OrganizationPaymentMethodWhereInput;
  orderBy?: OrganizationPaymentMethodOrderByInput;
  skip?: number;
  take?: number;
};
