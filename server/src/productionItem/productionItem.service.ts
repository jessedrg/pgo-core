import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProductionItemServiceBase } from "./base/productionItem.service.base";

@Injectable()
export class ProductionItemService extends ProductionItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
