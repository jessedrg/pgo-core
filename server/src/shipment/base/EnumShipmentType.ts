import { Production } from "../../production/base/Production";
import { Order } from "../../order/base/Order";
import { registerEnumType } from "@nestjs/graphql";

export enum EnumShipmentType {
  Production = "production",
  Order = "order",
}

registerEnumType(EnumShipmentType, {
  name: "EnumShipmentType",
});
