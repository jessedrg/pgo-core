import { Module } from "@nestjs/common";
import { ProviderModuleBase } from "./base/provider.module.base";
import { ProviderService } from "./provider.service";
import { ProviderController } from "./provider.controller";
import { ProviderResolver } from "./provider.resolver";

@Module({
  imports: [ProviderModuleBase],
  controllers: [ProviderController],
  providers: [ProviderService, ProviderResolver],
  exports: [ProviderService],
})
export class ProviderModule {}
