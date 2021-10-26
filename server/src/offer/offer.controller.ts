import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OfferService } from "./offer.service";
import { OfferControllerBase } from "./base/offer.controller.base";

@swagger.ApiTags("offers")
@common.Controller("offers")
export class OfferController extends OfferControllerBase {
  constructor(
    protected readonly service: OfferService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
