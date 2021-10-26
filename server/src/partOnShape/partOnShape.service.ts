import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PartOnShapeServiceBase } from "./base/partOnShape.service.base";

@Injectable()
export class PartOnShapeService extends PartOnShapeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
