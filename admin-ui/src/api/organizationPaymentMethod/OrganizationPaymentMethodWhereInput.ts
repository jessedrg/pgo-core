import { StringFilter } from "../../util/StringFilter";

export type OrganizationPaymentMethodWhereInput = {
  id?: StringFilter;
  type?: "bankAccount" | "card" | "deferred" | "paypal";
};
