import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HolidayService } from "./holiday.service";
import { HolidayControllerBase } from "./base/holiday.controller.base";

@swagger.ApiTags("holidays")
@common.Controller("holidays")
export class HolidayController extends HolidayControllerBase {
  constructor(
    protected readonly service: HolidayService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
