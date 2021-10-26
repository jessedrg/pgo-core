import { Module } from "@nestjs/common";
import { InviteModuleBase } from "./base/invite.module.base";
import { InviteService } from "./invite.service";
import { InviteController } from "./invite.controller";
import { InviteResolver } from "./invite.resolver";

@Module({
  imports: [InviteModuleBase],
  controllers: [InviteController],
  providers: [InviteService, InviteResolver],
  exports: [InviteService],
})
export class InviteModule {}
