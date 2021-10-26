import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PartMessageServiceBase } from "./base/partMessage.service.base";

@Injectable()
export class PartMessageService extends PartMessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
