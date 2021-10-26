import { Module } from "@nestjs/common";
import { ProductionItemModuleBase } from "./base/productionItem.module.base";
import { ProductionItemService } from "./productionItem.service";
import { ProductionItemController } from "./productionItem.controller";
import { ProductionItemResolver } from "./productionItem.resolver";

@Module({
  imports: [ProductionItemModuleBase],
  controllers: [ProductionItemController],
  providers: [ProductionItemService, ProductionItemResolver],
  exports: [ProductionItemService],
})
export class ProductionItemModule {}
