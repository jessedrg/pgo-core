import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProductionServiceBase } from "./base/production.service.base";

@Injectable()
export class ProductionService extends ProductionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
