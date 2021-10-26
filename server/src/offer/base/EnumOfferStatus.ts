import { registerEnumType } from "@nestjs/graphql";

export enum EnumOfferStatus {
  Draft = "draft",
  Pending = "pending",
  Publish = "publish",
  Rejected = "rejected",
}

registerEnumType(EnumOfferStatus, {
  name: "EnumOfferStatus",
});
