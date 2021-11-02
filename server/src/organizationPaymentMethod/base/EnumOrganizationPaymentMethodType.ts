import { registerEnumType } from "@nestjs/graphql";

export enum EnumOrganizationPaymentMethodType {
  BankAccount = "bankAccount",
  Card = "card",
  Deferred = "deferred",
  Paypal = "paypal",
}

registerEnumType(EnumOrganizationPaymentMethodType, {
  name: "EnumOrganizationPaymentMethodType",
});
