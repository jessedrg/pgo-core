import { registerEnumType } from "@nestjs/graphql";

export enum EnumQuoteStatus {
  Pending = "pending",
  Completed = "completed",
  Canceled = "canceled",
  Rejected = "rejected",
}

registerEnumType(EnumQuoteStatus, {
  name: "EnumQuoteStatus",
});
