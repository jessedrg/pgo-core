import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  QuoteItem,
  Price,
  Part,
  Provider,
  Quote,
} from "@prisma/client";

export class QuoteItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.QuoteItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuoteItemFindManyArgs>
  ): Promise<number> {
    return this.prisma.quoteItem.count(args);
  }

  async findMany<T extends Prisma.QuoteItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuoteItemFindManyArgs>
  ): Promise<QuoteItem[]> {
    return this.prisma.quoteItem.findMany(args);
  }
  async findOne<T extends Prisma.QuoteItemFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuoteItemFindUniqueArgs>
  ): Promise<QuoteItem | null> {
    return this.prisma.quoteItem.findUnique(args);
  }
  async create<T extends Prisma.QuoteItemCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuoteItemCreateArgs>
  ): Promise<QuoteItem> {
    return this.prisma.quoteItem.create<T>(args);
  }
  async update<T extends Prisma.QuoteItemUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuoteItemUpdateArgs>
  ): Promise<QuoteItem> {
    return this.prisma.quoteItem.update<T>(args);
  }
  async delete<T extends Prisma.QuoteItemDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuoteItemDeleteArgs>
  ): Promise<QuoteItem> {
    return this.prisma.quoteItem.delete(args);
  }

  async findBasePrices(
    parentId: string,
    args: Prisma.PriceFindManyArgs
  ): Promise<Price[]> {
    return this.prisma.quoteItem
      .findUnique({
        where: { id: parentId },
      })
      .basePrices(args);
  }

  async findPrices(
    parentId: string,
    args: Prisma.PriceFindManyArgs
  ): Promise<Price[]> {
    return this.prisma.quoteItem
      .findUnique({
        where: { id: parentId },
      })
      .prices(args);
  }

  async getPart(parentId: string): Promise<Part | null> {
    return this.prisma.quoteItem
      .findUnique({
        where: { id: parentId },
      })
      .part();
  }

  async getProvider(parentId: string): Promise<Provider | null> {
    return this.prisma.quoteItem
      .findUnique({
        where: { id: parentId },
      })
      .provider();
  }

  async getQuote(parentId: string): Promise<Quote | null> {
    return this.prisma.quoteItem
      .findUnique({
        where: { id: parentId },
      })
      .quote();
  }
}
