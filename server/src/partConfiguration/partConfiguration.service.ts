import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PartConfigurationServiceBase } from "./base/partConfiguration.service.base";

@Injectable()
export class PartConfigurationService extends PartConfigurationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
