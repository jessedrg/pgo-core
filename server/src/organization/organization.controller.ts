import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrganizationService } from "./organization.service";
import { OrganizationControllerBase } from "./base/organization.controller.base";

@swagger.ApiTags("organizations")
@common.Controller("organizations")
export class OrganizationController extends OrganizationControllerBase {
  constructor(
    protected readonly service: OrganizationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
