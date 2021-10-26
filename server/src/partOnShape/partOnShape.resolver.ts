import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PartOnShapeResolverBase } from "./base/partOnShape.resolver.base";
import { PartOnShape } from "./base/PartOnShape";
import { PartOnShapeService } from "./partOnShape.service";

@graphql.Resolver(() => PartOnShape)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PartOnShapeResolver extends PartOnShapeResolverBase {
  constructor(
    protected readonly service: PartOnShapeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
