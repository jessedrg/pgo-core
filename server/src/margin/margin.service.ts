import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MarginServiceBase } from "./base/margin.service.base";

@Injectable()
export class MarginService extends MarginServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
