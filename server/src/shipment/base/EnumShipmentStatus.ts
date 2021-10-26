import { registerEnumType } from "@nestjs/graphql";

export enum EnumShipmentStatus {
  Pending = "pending",
  OnTransit = "OnTransit",
  Delivered = "delivered",
}

registerEnumType(EnumShipmentStatus, {
  name: "EnumShipmentStatus",
});
