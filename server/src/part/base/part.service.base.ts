import { PrismaService } from "nestjs-prisma";

import {
  Prisma,
  Part,
  PartConfiguration,
  PartMessage,
  PartOnShape,
  ProductionItem,
  QuoteItem,
  Offer,
  Quote,
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

  async findPartConfigurations(
    parentId: string,
    args: Prisma.PartConfigurationFindManyArgs
  ): Promise<PartConfiguration[]> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .partConfigurations(args);
  }

  async findPartMessages(
    parentId: string,
    args: Prisma.PartMessageFindManyArgs
  ): Promise<PartMessage[]> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .partMessages(args);
  }

  async findPartOnShapes(
    parentId: string,
    args: Prisma.PartOnShapeFindManyArgs
  ): Promise<PartOnShape[]> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .partOnShapes(args);
  }

  async findProductionItems(
    parentId: string,
    args: Prisma.ProductionItemFindManyArgs
  ): Promise<ProductionItem[]> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .productionItems(args);
  }

  async findQuoteItems(
    parentId: string,
    args: Prisma.QuoteItemFindManyArgs
  ): Promise<QuoteItem[]> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .quoteItems(args);
  }

  async getOffer(parentId: string): Promise<Offer | null> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .offer();
  }

  async getPartonshape(parentId: string): Promise<PartOnShape | null> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .partonshape();
  }

  async getQuote(parentId: string): Promise<Quote | null> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .quote();
  }
}
