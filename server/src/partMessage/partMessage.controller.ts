import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PartMessageService } from "./partMessage.service";
import { PartMessageControllerBase } from "./base/partMessage.controller.base";

@swagger.ApiTags("part-messages")
@common.Controller("part-messages")
export class PartMessageController extends PartMessageControllerBase {
  constructor(
    protected readonly service: PartMessageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
