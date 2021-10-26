import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { HolidayResolverBase } from "./base/holiday.resolver.base";
import { Holiday } from "./base/Holiday";
import { HolidayService } from "./holiday.service";

@graphql.Resolver(() => Holiday)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class HolidayResolver extends HolidayResolverBase {
  constructor(
    protected readonly service: HolidayService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
