import { PrismaService } from "nestjs-prisma";

import {
  Prisma,
  Part,
  Offer,
  PartConfiguration,
  OrderItem,
  ProductionItem,
  PartMessage,
  PartOnShape,
  Production,
  QuoteItem,
} from "@prisma/client";

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

  async findOffersInPart(
    parentId: string,
    args: Prisma.OfferFindManyArgs
  ): Promise<Offer[]> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .offersInPart(args);
  }

  async findPart(
    parentId: string,
    args: Prisma.PartConfigurationFindManyArgs
  ): Promise<PartConfiguration[]> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .part(args);
  }

  async findPartInOrderItem(
    parentId: string,
    args: Prisma.OrderItemFindManyArgs
  ): Promise<OrderItem[]> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .partInOrderItem(args);
  }

  async findPartInProduction(
    parentId: string,
    args: Prisma.ProductionItemFindManyArgs
  ): Promise<ProductionItem[]> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .partInProduction(args);
  }

  async findPartMessagesInPart(
    parentId: string,
    args: Prisma.PartMessageFindManyArgs
  ): Promise<PartMessage[]> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .partMessagesInPart(args);
  }

  async findPartOnShape(
    parentId: string,
    args: Prisma.PartOnShapeFindManyArgs
  ): Promise<PartOnShape[]> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .partOnShape(args);
  }

  async findProductionsInParts(
    parentId: string,
    args: Prisma.ProductionFindManyArgs
  ): Promise<Production[]> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .productionsInParts(args);
  }

  async findQuoteItem(
    parentId: string,
    args: Prisma.QuoteItemFindManyArgs
  ): Promise<QuoteItem[]> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .quoteItem(args);
  }
}
