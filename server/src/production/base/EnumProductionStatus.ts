import { registerEnumType } from "@nestjs/graphql";

export enum EnumProductionStatus {
  Pending = "pending",
  Processing = "processing",
  Shipped = "shipped",
  Quality = "quality",
  Completed = "completed",
  Canceled = "canceled",
  Rejected = "rejected",
}

registerEnumType(EnumProductionStatus, {
  name: "EnumProductionStatus",
});
