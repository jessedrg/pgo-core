import { PrismaService } from "nestjs-prisma";
import { Prisma, Margin } from "@prisma/client";

export class MarginServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MarginFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MarginFindManyArgs>
  ): Promise<number> {
    return this.prisma.margin.count(args);
  }

  async findMany<T extends Prisma.MarginFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MarginFindManyArgs>
  ): Promise<Margin[]> {
    return this.prisma.margin.findMany(args);
  }
  async findOne<T extends Prisma.MarginFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MarginFindUniqueArgs>
  ): Promise<Margin | null> {
    return this.prisma.margin.findUnique(args);
  }
  async create<T extends Prisma.MarginCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MarginCreateArgs>
  ): Promise<Margin> {
    return this.prisma.margin.create<T>(args);
  }
  async update<T extends Prisma.MarginUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MarginUpdateArgs>
  ): Promise<Margin> {
    return this.prisma.margin.update<T>(args);
  }
  async delete<T extends Prisma.MarginDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MarginDeleteArgs>
  ): Promise<Margin> {
    return this.prisma.margin.delete(args);
  }
}
