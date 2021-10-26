import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuoteItemService } from "./quoteItem.service";
import { QuoteItemControllerBase } from "./base/quoteItem.controller.base";

@swagger.ApiTags("quote-items")
@common.Controller("quote-items")
export class QuoteItemController extends QuoteItemControllerBase {
  constructor(
    protected readonly service: QuoteItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
