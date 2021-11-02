import { PrismaService } from "nestjs-prisma";
import { Prisma, Price, QuoteItem } from "@prisma/client";

export class PriceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PriceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PriceFindManyArgs>
  ): Promise<number> {
    return this.prisma.price.count(args);
  }

  async findMany<T extends Prisma.PriceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PriceFindManyArgs>
  ): Promise<Price[]> {
    return this.prisma.price.findMany(args);
  }
  async findOne<T extends Prisma.PriceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PriceFindUniqueArgs>
  ): Promise<Price | null> {
    return this.prisma.price.findUnique(args);
  }
  async create<T extends Prisma.PriceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PriceCreateArgs>
  ): Promise<Price> {
    return this.prisma.price.create<T>(args);
  }
  async update<T extends Prisma.PriceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PriceUpdateArgs>
  ): Promise<Price> {
    return this.prisma.price.update<T>(args);
  }
  async delete<T extends Prisma.PriceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PriceDeleteArgs>
  ): Promise<Price> {
    return this.prisma.price.delete(args);
  }

  async findQuoteItemBasePrices(
    parentId: string,
    args: Prisma.QuoteItemFindManyArgs
  ): Promise<QuoteItem[]> {
    return this.prisma.price
      .findUnique({
        where: { id: parentId },
      })
      .quoteItemBasePrices(args);
  }

  async findQuoteItemPrices(
    parentId: string,
    args: Prisma.QuoteItemFindManyArgs
  ): Promise<QuoteItem[]> {
    return this.prisma.price
      .findUnique({
        where: { id: parentId },
      })
      .quoteItemPrices(args);
  }
}
