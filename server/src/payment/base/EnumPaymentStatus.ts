import { registerEnumType } from "@nestjs/graphql";

export enum EnumPaymentStatus {
  Pending = "pending",
  Completed = "completed",
  Rejected = "rejected",
}

registerEnumType(EnumPaymentStatus, {
  name: "EnumPaymentStatus",
});
