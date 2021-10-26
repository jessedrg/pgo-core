import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProductionItemResolverBase } from "./base/productionItem.resolver.base";
import { ProductionItem } from "./base/ProductionItem";
import { ProductionItemService } from "./productionItem.service";

@graphql.Resolver(() => ProductionItem)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProductionItemResolver extends ProductionItemResolverBase {
  constructor(
    protected readonly service: ProductionItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
