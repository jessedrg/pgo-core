import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { HolidayServiceBase } from "./base/holiday.service.base";

@Injectable()
export class HolidayService extends HolidayServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
