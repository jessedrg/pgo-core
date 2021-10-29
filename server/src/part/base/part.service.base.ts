import { PrismaService } from "nestjs-prisma";
import { Prisma, Part } from "@prisma/client";

export class PartServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PartFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartFindManyArgs>
  ): Promise<number> {
    return this.prisma.part.count(args);
  }

  async findMany<T extends Prisma.PartFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartFindManyArgs>
  ): Promise<Part[]> {
    return this.prisma.part.findMany(args);
  }
  async findOne<T extends Prisma.PartFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartFindUniqueArgs>
  ): Promise<Part | null> {
    return this.prisma.part.findUnique(args);
  }
  async create<T extends Prisma.PartCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartCreateArgs>
  ): Promise<Part> {
    return this.prisma.part.create<T>(args);
  }
  async update<T extends Prisma.PartUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartUpdateArgs>
  ): Promise<Part> {
    return this.prisma.part.update<T>(args);
  }
  async delete<T extends Prisma.PartDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartDeleteArgs>
  ): Promise<Part> {
    return this.prisma.part.delete(args);
  }
}
