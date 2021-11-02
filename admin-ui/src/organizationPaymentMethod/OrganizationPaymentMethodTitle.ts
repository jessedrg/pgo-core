import { OrganizationPaymentMethod as TOrganizationPaymentMethod } from "../api/organizationPaymentMethod/OrganizationPaymentMethod";

export const ORGANIZATIONPAYMENTMETHOD_TITLE_FIELD = "id";

export const OrganizationPaymentMethodTitle = (
  record: TOrganizationPaymentMethod
): string => {
  return record.id || record.id;
};
