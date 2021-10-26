import { Module } from "@nestjs/common";
import { ProductionModuleBase } from "./base/production.module.base";
import { ProductionService } from "./production.service";
import { ProductionController } from "./production.controller";
import { ProductionResolver } from "./production.resolver";

@Module({
  imports: [ProductionModuleBase],
  controllers: [ProductionController],
  providers: [ProductionService, ProductionResolver],
  exports: [ProductionService],
})
export class ProductionModule {}
