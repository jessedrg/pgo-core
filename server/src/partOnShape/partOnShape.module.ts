import { Module } from "@nestjs/common";
import { PartOnShapeModuleBase } from "./base/partOnShape.module.base";
import { PartOnShapeService } from "./partOnShape.service";
import { PartOnShapeController } from "./partOnShape.controller";
import { PartOnShapeResolver } from "./partOnShape.resolver";

@Module({
  imports: [PartOnShapeModuleBase],
  controllers: [PartOnShapeController],
  providers: [PartOnShapeService, PartOnShapeResolver],
  exports: [PartOnShapeService],
})
export class PartOnShapeModule {}
