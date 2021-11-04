import { Agent } from "../../agent/base/Agent";
import { Provider } from "../../provider/base/Provider";
import { registerEnumType } from "@nestjs/graphql";

export enum EnumPartMessageUserType {
  Agent = "Agent",
  Client = "Client",
  Provider = "Provider",
}

registerEnumType(EnumPartMessageUserType, {
  name: "EnumPartMessageUserType",
});
