import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrderItemService } from "./orderItem.service";
import { OrderItemControllerBase } from "./base/orderItem.controller.base";

@swagger.ApiTags("order-items")
@common.Controller("order-items")
export class OrderItemController extends OrderItemControllerBase {
  constructor(
    protected readonly service: OrderItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
