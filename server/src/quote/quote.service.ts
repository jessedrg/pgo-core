import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { QuoteServiceBase } from "./base/quote.service.base";

@Injectable()
export class QuoteService extends QuoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
