import { PrismaService } from "nestjs-prisma";
import { Prisma, PartOnShape } from "@prisma/client";

export class PartOnShapeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PartOnShapeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartOnShapeFindManyArgs>
  ): Promise<number> {
    return this.prisma.partOnShape.count(args);
  }

  async findMany<T extends Prisma.PartOnShapeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartOnShapeFindManyArgs>
  ): Promise<PartOnShape[]> {
    return this.prisma.partOnShape.findMany(args);
  }
  async findOne<T extends Prisma.PartOnShapeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartOnShapeFindUniqueArgs>
  ): Promise<PartOnShape | null> {
    return this.prisma.partOnShape.findUnique(args);
  }
  async create<T extends Prisma.PartOnShapeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartOnShapeCreateArgs>
  ): Promise<PartOnShape> {
    return this.prisma.partOnShape.create<T>(args);
  }
  async update<T extends Prisma.PartOnShapeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartOnShapeUpdateArgs>
  ): Promise<PartOnShape> {
    return this.prisma.partOnShape.update<T>(args);
  }
  async delete<T extends Prisma.PartOnShapeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartOnShapeDeleteArgs>
  ): Promise<PartOnShape> {
    return this.prisma.partOnShape.delete(args);
  }
}
