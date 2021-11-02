import { JsonValue } from "type-fest";

export type OrganizationPaymentMethodCreateInput = {
  data?: JsonValue | null;
  type?: "bankAccount" | "card" | "deferred" | "paypal" | null;
};
