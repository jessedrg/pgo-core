import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  Production,
  ProductionItem,
  Order,
  Part,
  Provider,
} from "@prisma/client";

export class ProductionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProductionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductionFindManyArgs>
  ): Promise<number> {
    return this.prisma.production.count(args);
  }

  async findMany<T extends Prisma.ProductionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductionFindManyArgs>
  ): Promise<Production[]> {
    return this.prisma.production.findMany(args);
  }
  async findOne<T extends Prisma.ProductionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductionFindUniqueArgs>
  ): Promise<Production | null> {
    return this.prisma.production.findUnique(args);
  }
  async create<T extends Prisma.ProductionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductionCreateArgs>
  ): Promise<Production> {
    return this.prisma.production.create<T>(args);
  }
  async update<T extends Prisma.ProductionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductionUpdateArgs>
  ): Promise<Production> {
    return this.prisma.production.update<T>(args);
  }
  async delete<T extends Prisma.ProductionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProductionDeleteArgs>
  ): Promise<Production> {
    return this.prisma.production.delete(args);
  }

  async findProductionItemInProduction(
    parentId: string,
    args: Prisma.ProductionItemFindManyArgs
  ): Promise<ProductionItem[]> {
    return this.prisma.production
      .findUnique({
        where: { id: parentId },
      })
      .productionItemInProduction(args);
  }

  async getOrderId(parentId: string): Promise<Order | null> {
    return this.prisma.production
      .findUnique({
        where: { id: parentId },
      })
      .orderId();
  }

  async getPartId(parentId: string): Promise<Part | null> {
    return this.prisma.production
      .findUnique({
        where: { id: parentId },
      })
      .partId();
  }

  async getProviderId(parentId: string): Promise<Provider | null> {
    return this.prisma.production
      .findUnique({
        where: { id: parentId },
      })
      .providerId();
  }
}
