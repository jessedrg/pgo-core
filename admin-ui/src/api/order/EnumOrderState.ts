import { Production } from "../production/Production";

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
