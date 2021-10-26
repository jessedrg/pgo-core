import { Module } from "@nestjs/common";
import { QuoteItemModuleBase } from "./base/quoteItem.module.base";
import { QuoteItemService } from "./quoteItem.service";
import { QuoteItemController } from "./quoteItem.controller";
import { QuoteItemResolver } from "./quoteItem.resolver";

@Module({
  imports: [QuoteItemModuleBase],
  controllers: [QuoteItemController],
  providers: [QuoteItemService, QuoteItemResolver],
  exports: [QuoteItemService],
})
export class QuoteItemModule {}
