import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { OrderItemResolverBase } from "./base/orderItem.resolver.base";
import { OrderItem } from "./base/OrderItem";
import { OrderItemService } from "./orderItem.service";

@graphql.Resolver(() => OrderItem)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OrderItemResolver extends OrderItemResolverBase {
  constructor(
    protected readonly service: OrderItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
