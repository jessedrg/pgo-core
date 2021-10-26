import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { QuoteResolverBase } from "./base/quote.resolver.base";
import { Quote } from "./base/Quote";
import { QuoteService } from "./quote.service";

@graphql.Resolver(() => Quote)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class QuoteResolver extends QuoteResolverBase {
  constructor(
    protected readonly service: QuoteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
