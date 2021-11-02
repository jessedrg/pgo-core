import { Module } from "@nestjs/common";
import { OrganizationPaymentMethodModuleBase } from "./base/organizationPaymentMethod.module.base";
import { OrganizationPaymentMethodService } from "./organizationPaymentMethod.service";
import { OrganizationPaymentMethodController } from "./organizationPaymentMethod.controller";
import { OrganizationPaymentMethodResolver } from "./organizationPaymentMethod.resolver";

@Module({
  imports: [OrganizationPaymentMethodModuleBase],
  controllers: [OrganizationPaymentMethodController],
  providers: [
    OrganizationPaymentMethodService,
    OrganizationPaymentMethodResolver,
  ],
  exports: [OrganizationPaymentMethodService],
})
export class OrganizationPaymentMethodModule {}
