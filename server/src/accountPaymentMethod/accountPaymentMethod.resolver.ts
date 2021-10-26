import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AccountPaymentMethodResolverBase } from "./base/accountPaymentMethod.resolver.base";
import { AccountPaymentMethod } from "./base/AccountPaymentMethod";
import { AccountPaymentMethodService } from "./accountPaymentMethod.service";

@graphql.Resolver(() => AccountPaymentMethod)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AccountPaymentMethodResolver extends AccountPaymentMethodResolverBase {
  constructor(
    protected readonly service: AccountPaymentMethodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
