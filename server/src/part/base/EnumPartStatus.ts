import { registerEnumType } from "@nestjs/graphql";

export enum EnumPartStatus {
  Draft = "draft",
  Pending = "pending",
  Rejected = "rejected",
  Publish = "publish",
}

registerEnumType(EnumPartStatus, {
  name: "EnumPartStatus",
});
