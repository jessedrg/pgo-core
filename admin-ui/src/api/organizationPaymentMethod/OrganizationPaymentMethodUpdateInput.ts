import { JsonValue } from "type-fest";

export type OrganizationPaymentMethodUpdateInput = {
  data?: JsonValue | null;
  type?: "bankAccount" | "card" | "deferred" | "paypal" | null;
};
