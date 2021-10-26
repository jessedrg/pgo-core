import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PartOnShapeService } from "./partOnShape.service";
import { PartOnShapeControllerBase } from "./base/partOnShape.controller.base";

@swagger.ApiTags("part-on-shapes")
@common.Controller("part-on-shapes")
export class PartOnShapeController extends PartOnShapeControllerBase {
  constructor(
    protected readonly service: PartOnShapeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
