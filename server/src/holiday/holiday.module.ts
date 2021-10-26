import { Module } from "@nestjs/common";
import { HolidayModuleBase } from "./base/holiday.module.base";
import { HolidayService } from "./holiday.service";
import { HolidayController } from "./holiday.controller";
import { HolidayResolver } from "./holiday.resolver";

@Module({
  imports: [HolidayModuleBase],
  controllers: [HolidayController],
  providers: [HolidayService, HolidayResolver],
  exports: [HolidayService],
})
export class HolidayModule {}
