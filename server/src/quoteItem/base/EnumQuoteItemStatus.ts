import { registerEnumType } from "@nestjs/graphql";

export enum EnumQuoteItemStatus {
  Pending = "pending",
  Completed = "completed",
  Rejected = "rejected",
  Canceled = "canceled",
}

registerEnumType(EnumQuoteItemStatus, {
  name: "EnumQuoteItemStatus",
});
