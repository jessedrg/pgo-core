import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductionService } from "./production.service";
import { ProductionControllerBase } from "./base/production.controller.base";

@swagger.ApiTags("productions")
@common.Controller("productions")
export class ProductionController extends ProductionControllerBase {
  constructor(
    protected readonly service: ProductionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
