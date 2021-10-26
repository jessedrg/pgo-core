import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MediaFileResolverBase } from "./base/mediaFile.resolver.base";
import { MediaFile } from "./base/MediaFile";
import { MediaFileService } from "./mediaFile.service";

@graphql.Resolver(() => MediaFile)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MediaFileResolver extends MediaFileResolverBase {
  constructor(
    protected readonly service: MediaFileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
