import { Production } from "../../production/base/Production";
import { registerEnumType } from "@nestjs/graphql";

export enum EnumOrderState {
  OnHold = "onHold",
  Failed = "failed",
  Processing = "processing",
  Production = "production",
  Quality = "quality",
  Shipped = "shipped",
  Completed = "completed",
  Cancelled = "cancelled",
  Refound = "refound",
}

registerEnumType(EnumOrderState, {
  name: "EnumOrderState",
});
