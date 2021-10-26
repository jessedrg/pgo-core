import { Module } from "@nestjs/common";
import { OrderItemModuleBase } from "./base/orderItem.module.base";
import { OrderItemService } from "./orderItem.service";
import { OrderItemController } from "./orderItem.controller";
import { OrderItemResolver } from "./orderItem.resolver";

@Module({
  imports: [OrderItemModuleBase],
  controllers: [OrderItemController],
  providers: [OrderItemService, OrderItemResolver],
  exports: [OrderItemService],
})
export class OrderItemModule {}
