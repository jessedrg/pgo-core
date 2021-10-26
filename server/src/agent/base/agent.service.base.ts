import { PrismaService } from "nestjs-prisma";
import { Prisma, Agent, Account } from "@prisma/client";

export class AgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AgentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgentFindManyArgs>
  ): Promise<number> {
    return this.prisma.agent.count(args);
  }

  async findMany<T extends Prisma.AgentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgentFindManyArgs>
  ): Promise<Agent[]> {
    return this.prisma.agent.findMany(args);
  }
  async findOne<T extends Prisma.AgentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgentFindUniqueArgs>
  ): Promise<Agent | null> {
    return this.prisma.agent.findUnique(args);
  }
  async create<T extends Prisma.AgentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgentCreateArgs>
  ): Promise<Agent> {
    return this.prisma.agent.create<T>(args);
  }
  async update<T extends Prisma.AgentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgentUpdateArgs>
  ): Promise<Agent> {
    return this.prisma.agent.update<T>(args);
  }
  async delete<T extends Prisma.AgentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgentDeleteArgs>
  ): Promise<Agent> {
    return this.prisma.agent.delete(args);
  }

  async getAccountId(parentId: string): Promise<Account | null> {
    return this.prisma.agent
      .findUnique({
        where: { id: parentId },
      })
      .accountId();
  }
}
