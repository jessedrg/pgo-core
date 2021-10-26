import { Module } from "@nestjs/common";
import { AccountModuleBase } from "./base/account.module.base";
import { AccountService } from "./account.service";
import { AccountController } from "./account.controller";
import { AccountResolver } from "./account.resolver";

@Module({
  imports: [AccountModuleBase],
  controllers: [AccountController],
  providers: [AccountService, AccountResolver],
  exports: [AccountService],
})
export class AccountModule {}
