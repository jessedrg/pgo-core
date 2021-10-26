import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SessionResolverBase } from "./base/session.resolver.base";
import { Session } from "./base/Session";
import { SessionService } from "./session.service";

@graphql.Resolver(() => Session)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SessionResolver extends SessionResolverBase {
  constructor(
    protected readonly service: SessionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
