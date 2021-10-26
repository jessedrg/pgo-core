import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PartConfigurationService } from "./partConfiguration.service";
import { PartConfigurationControllerBase } from "./base/partConfiguration.controller.base";

@swagger.ApiTags("part-configurations")
@common.Controller("part-configurations")
export class PartConfigurationController extends PartConfigurationControllerBase {
  constructor(
    protected readonly service: PartConfigurationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
