import { PrismaService } from "nestjs-prisma";
import { Prisma, PartMessage, Part, Account } from "@prisma/client";

export class PartMessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PartMessageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartMessageFindManyArgs>
  ): Promise<number> {
    return this.prisma.partMessage.count(args);
  }

  async findMany<T extends Prisma.PartMessageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartMessageFindManyArgs>
  ): Promise<PartMessage[]> {
    return this.prisma.partMessage.findMany(args);
  }
  async findOne<T extends Prisma.PartMessageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartMessageFindUniqueArgs>
  ): Promise<PartMessage | null> {
    return this.prisma.partMessage.findUnique(args);
  }
  async create<T extends Prisma.PartMessageCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartMessageCreateArgs>
  ): Promise<PartMessage> {
    return this.prisma.partMessage.create<T>(args);
  }
  async update<T extends Prisma.PartMessageUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartMessageUpdateArgs>
  ): Promise<PartMessage> {
    return this.prisma.partMessage.update<T>(args);
  }
  async delete<T extends Prisma.PartMessageDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartMessageDeleteArgs>
  ): Promise<PartMessage> {
    return this.prisma.partMessage.delete(args);
  }

  async getPartId(parentId: string): Promise<Part | null> {
    return this.prisma.partMessage
      .findUnique({
        where: { id: parentId },
      })
      .partId();
  }

  async getRecieverId(parentId: string): Promise<Account | null> {
    return this.prisma.partMessage
      .findUnique({
        where: { id: parentId },
      })
      .recieverId();
  }

  async getSenderId(parentId: string): Promise<Account | null> {
    return this.prisma.partMessage
      .findUnique({
        where: { id: parentId },
      })
      .senderId();
  }
}
