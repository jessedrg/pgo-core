import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PaymentResolverBase } from "./base/payment.resolver.base";
import { Payment } from "./base/Payment";
import { PaymentService } from "./payment.service";

@graphql.Resolver(() => Payment)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PaymentResolver extends PaymentResolverBase {
  constructor(
    protected readonly service: PaymentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
