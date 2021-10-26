import { Module } from "@nestjs/common";
import { PartMessageModuleBase } from "./base/partMessage.module.base";
import { PartMessageService } from "./partMessage.service";
import { PartMessageController } from "./partMessage.controller";
import { PartMessageResolver } from "./partMessage.resolver";

@Module({
  imports: [PartMessageModuleBase],
  controllers: [PartMessageController],
  providers: [PartMessageService, PartMessageResolver],
  exports: [PartMessageService],
})
export class PartMessageModule {}
