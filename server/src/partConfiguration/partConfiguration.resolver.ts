import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PartConfigurationResolverBase } from "./base/partConfiguration.resolver.base";
import { PartConfiguration } from "./base/PartConfiguration";
import { PartConfigurationService } from "./partConfiguration.service";

@graphql.Resolver(() => PartConfiguration)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PartConfigurationResolver extends PartConfigurationResolverBase {
  constructor(
    protected readonly service: PartConfigurationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
