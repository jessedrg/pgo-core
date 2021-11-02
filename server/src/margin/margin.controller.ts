import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MarginService } from "./margin.service";
import { MarginControllerBase } from "./base/margin.controller.base";

@swagger.ApiTags("margins")
@common.Controller("margins")
export class MarginController extends MarginControllerBase {
  constructor(
    protected readonly service: MarginService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
