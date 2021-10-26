import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MediaFileService } from "./mediaFile.service";
import { MediaFileControllerBase } from "./base/mediaFile.controller.base";

@swagger.ApiTags("media-files")
@common.Controller("media-files")
export class MediaFileController extends MediaFileControllerBase {
  constructor(
    protected readonly service: MediaFileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
