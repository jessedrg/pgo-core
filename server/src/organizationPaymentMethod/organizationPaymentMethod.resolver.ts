import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { OrganizationPaymentMethodResolverBase } from "./base/organizationPaymentMethod.resolver.base";
import { OrganizationPaymentMethod } from "./base/OrganizationPaymentMethod";
import { OrganizationPaymentMethodService } from "./organizationPaymentMethod.service";

@graphql.Resolver(() => OrganizationPaymentMethod)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OrganizationPaymentMethodResolver extends OrganizationPaymentMethodResolverBase {
  constructor(
    protected readonly service: OrganizationPaymentMethodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
