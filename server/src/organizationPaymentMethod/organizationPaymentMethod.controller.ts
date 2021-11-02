import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrganizationPaymentMethodService } from "./organizationPaymentMethod.service";
import { OrganizationPaymentMethodControllerBase } from "./base/organizationPaymentMethod.controller.base";

@swagger.ApiTags("organization-payment-methods")
@common.Controller("organization-payment-methods")
export class OrganizationPaymentMethodController extends OrganizationPaymentMethodControllerBase {
  constructor(
    protected readonly service: OrganizationPaymentMethodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
