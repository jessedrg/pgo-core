import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { QuoteItemServiceBase } from "./base/quoteItem.service.base";

@Injectable()
export class QuoteItemService extends QuoteItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
