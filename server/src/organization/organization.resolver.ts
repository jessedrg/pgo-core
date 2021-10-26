import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { OrganizationResolverBase } from "./base/organization.resolver.base";
import { Organization } from "./base/Organization";
import { OrganizationService } from "./organization.service";

@graphql.Resolver(() => Organization)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OrganizationResolver extends OrganizationResolverBase {
  constructor(
    protected readonly service: OrganizationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
