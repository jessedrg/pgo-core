import { registerEnumType } from "@nestjs/graphql";

export enum EnumAddressType {
  Billing = "Billing",
  Shipping = "Shipping",
}

registerEnumType(EnumAddressType, {
  name: "EnumAddressType",
});
