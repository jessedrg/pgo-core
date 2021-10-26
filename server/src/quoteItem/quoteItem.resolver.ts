import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { QuoteItemResolverBase } from "./base/quoteItem.resolver.base";
import { QuoteItem } from "./base/QuoteItem";
import { QuoteItemService } from "./quoteItem.service";

@graphql.Resolver(() => QuoteItem)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class QuoteItemResolver extends QuoteItemResolverBase {
  constructor(
    protected readonly service: QuoteItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
