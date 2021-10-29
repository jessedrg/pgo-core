import { PrismaService } from "nestjs-prisma";
import { Prisma, Provider, Holiday, QuoteItem, Quote } from "@prisma/client";

export class ProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ProviderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProviderFindManyArgs>
  ): Promise<number> {
    return this.prisma.provider.count(args);
  }

  async findMany<T extends Prisma.ProviderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProviderFindManyArgs>
  ): Promise<Provider[]> {
    return this.prisma.provider.findMany(args);
  }
  async findOne<T extends Prisma.ProviderFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProviderFindUniqueArgs>
  ): Promise<Provider | null> {
    return this.prisma.provider.findUnique(args);
  }
  async create<T extends Prisma.ProviderCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProviderCreateArgs>
  ): Promise<Provider> {
    return this.prisma.provider.create<T>(args);
  }
  async update<T extends Prisma.ProviderUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProviderUpdateArgs>
  ): Promise<Provider> {
    return this.prisma.provider.update<T>(args);
  }
  async delete<T extends Prisma.ProviderDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ProviderDeleteArgs>
  ): Promise<Provider> {
    return this.prisma.provider.delete(args);
  }

  async findHolidays(
    parentId: string,
    args: Prisma.HolidayFindManyArgs
  ): Promise<Holiday[]> {
    return this.prisma.provider
      .findUnique({
        where: { id: parentId },
      })
      .holidays(args);
  }

  async findQuoteItems(
    parentId: string,
    args: Prisma.QuoteItemFindManyArgs
  ): Promise<QuoteItem[]> {
    return this.prisma.provider
      .findUnique({
        where: { id: parentId },
      })
      .quoteItems(args);
  }

  async findQuotes(
    parentId: string,
    args: Prisma.QuoteFindManyArgs
  ): Promise<Quote[]> {
    return this.prisma.provider
      .findUnique({
        where: { id: parentId },
      })
      .quotes(args);
  }
}
