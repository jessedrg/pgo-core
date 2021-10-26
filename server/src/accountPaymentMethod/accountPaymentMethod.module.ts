import { Module } from "@nestjs/common";
import { AccountPaymentMethodModuleBase } from "./base/accountPaymentMethod.module.base";
import { AccountPaymentMethodService } from "./accountPaymentMethod.service";
import { AccountPaymentMethodController } from "./accountPaymentMethod.controller";
import { AccountPaymentMethodResolver } from "./accountPaymentMethod.resolver";

@Module({
  imports: [AccountPaymentMethodModuleBase],
  controllers: [AccountPaymentMethodController],
  providers: [AccountPaymentMethodService, AccountPaymentMethodResolver],
  exports: [AccountPaymentMethodService],
})
export class AccountPaymentMethodModule {}
