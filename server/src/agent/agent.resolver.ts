import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AgentResolverBase } from "./base/agent.resolver.base";
import { Agent } from "./base/Agent";
import { AgentService } from "./agent.service";

@graphql.Resolver(() => Agent)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AgentResolver extends AgentResolverBase {
  constructor(
    protected readonly service: AgentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
