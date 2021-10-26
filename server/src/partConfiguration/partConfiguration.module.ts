import { Module } from "@nestjs/common";
import { PartConfigurationModuleBase } from "./base/partConfiguration.module.base";
import { PartConfigurationService } from "./partConfiguration.service";
import { PartConfigurationController } from "./partConfiguration.controller";
import { PartConfigurationResolver } from "./partConfiguration.resolver";

@Module({
  imports: [PartConfigurationModuleBase],
  controllers: [PartConfigurationController],
  providers: [PartConfigurationService, PartConfigurationResolver],
  exports: [PartConfigurationService],
})
export class PartConfigurationModule {}
