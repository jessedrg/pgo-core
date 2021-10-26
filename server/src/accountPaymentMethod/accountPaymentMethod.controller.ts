import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccountPaymentMethodService } from "./accountPaymentMethod.service";
import { AccountPaymentMethodControllerBase } from "./base/accountPaymentMethod.controller.base";

@swagger.ApiTags("account-payment-methods")
@common.Controller("account-payment-methods")
export class AccountPaymentMethodController extends AccountPaymentMethodControllerBase {
  constructor(
    protected readonly service: AccountPaymentMethodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
