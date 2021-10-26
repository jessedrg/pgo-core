import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ShipmentResolverBase } from "./base/shipment.resolver.base";
import { Shipment } from "./base/Shipment";
import { ShipmentService } from "./shipment.service";

@graphql.Resolver(() => Shipment)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ShipmentResolver extends ShipmentResolverBase {
  constructor(
    protected readonly service: ShipmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
