import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductionItemService } from "./productionItem.service";
import { ProductionItemControllerBase } from "./base/productionItem.controller.base";

@swagger.ApiTags("production-items")
@common.Controller("production-items")
export class ProductionItemController extends ProductionItemControllerBase {
  constructor(
    protected readonly service: ProductionItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
