import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PartService } from "./part.service";
import { PartControllerBase } from "./base/part.controller.base";

@swagger.ApiTags("parts")
@common.Controller("parts")
export class PartController extends PartControllerBase {
  constructor(
    protected readonly service: PartService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
