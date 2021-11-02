import { Module } from "@nestjs/common";
import { MarginModuleBase } from "./base/margin.module.base";
import { MarginService } from "./margin.service";
import { MarginController } from "./margin.controller";
import { MarginResolver } from "./margin.resolver";

@Module({
  imports: [MarginModuleBase],
  controllers: [MarginController],
  providers: [MarginService, MarginResolver],
  exports: [MarginService],
})
export class MarginModule {}
