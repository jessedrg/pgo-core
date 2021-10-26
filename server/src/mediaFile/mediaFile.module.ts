import { Module } from "@nestjs/common";
import { MediaFileModuleBase } from "./base/mediaFile.module.base";
import { MediaFileService } from "./mediaFile.service";
import { MediaFileController } from "./mediaFile.controller";
import { MediaFileResolver } from "./mediaFile.resolver";

@Module({
  imports: [MediaFileModuleBase],
  controllers: [MediaFileController],
  providers: [MediaFileService, MediaFileResolver],
  exports: [MediaFileService],
})
export class MediaFileModule {}
