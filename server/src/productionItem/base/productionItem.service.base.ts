import { PrismaService } from "nestjs-prisma";
import { Prisma, ProductionItem } from "@prisma/client";

export class ProductionItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProductionItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductionItemFindManyArgs>
  ): Promise<number> {
    return this.prisma.productionItem.count(args);
  }

  async findMany<T extends Prisma.ProductionItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductionItemFindManyArgs>
  ): Promise<ProductionItem[]> {
    return this.prisma.productionItem.findMany(args);
  }
  async findOne<T extends Prisma.ProductionItemFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductionItemFindUniqueArgs>
  ): Promise<ProductionItem | null> {
    return this.prisma.productionItem.findUnique(args);
  }
  async create<T extends Prisma.ProductionItemCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductionItemCreateArgs>
  ): Promise<ProductionItem> {
    return this.prisma.productionItem.create<T>(args);
  }
  async update<T extends Prisma.ProductionItemUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductionItemUpdateArgs>
  ): Promise<ProductionItem> {
    return this.prisma.productionItem.update<T>(args);
  }
  async delete<T extends Prisma.ProductionItemDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductionItemDeleteArgs>
  ): Promise<ProductionItem> {
    return this.prisma.productionItem.delete(args);
  }
}
