import { Module } from "@nestjs/common";
import { PartModuleBase } from "./base/part.module.base";
import { PartService } from "./part.service";
import { PartController } from "./part.controller";
import { PartResolver } from "./part.resolver";

@Module({
  imports: [PartModuleBase],
  controllers: [PartController],
  providers: [PartService, PartResolver],
  exports: [PartService],
})
export class PartModule {}
