import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PartMessageResolverBase } from "./base/partMessage.resolver.base";
import { PartMessage } from "./base/PartMessage";
import { PartMessageService } from "./partMessage.service";

@graphql.Resolver(() => PartMessage)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PartMessageResolver extends PartMessageResolverBase {
  constructor(
    protected readonly service: PartMessageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
