import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AgentServiceBase } from "./base/agent.service.base";

@Injectable()
export class AgentService extends AgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
