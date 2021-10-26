import { PrismaService } from "nestjs-prisma";
import { Prisma, Quote, Account, Provider } from "@prisma/client";

export class QuoteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.QuoteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuoteFindManyArgs>
  ): Promise<number> {
    return this.prisma.quote.count(args);
  }

  async findMany<T extends Prisma.QuoteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuoteFindManyArgs>
  ): Promise<Quote[]> {
    return this.prisma.quote.findMany(args);
  }
  async findOne<T extends Prisma.QuoteFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuoteFindUniqueArgs>
  ): Promise<Quote | null> {
    return this.prisma.quote.findUnique(args);
  }
  async create<T extends Prisma.QuoteCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuoteCreateArgs>
  ): Promise<Quote> {
    return this.prisma.quote.create<T>(args);
  }
  async update<T extends Prisma.QuoteUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuoteUpdateArgs>
  ): Promise<Quote> {
    return this.prisma.quote.update<T>(args);
  }
  async delete<T extends Prisma.QuoteDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.QuoteDeleteArgs>
  ): Promise<Quote> {
    return this.prisma.quote.delete(args);
  }

  async getAccountId(parentId: string): Promise<Account | null> {
    return this.prisma.quote
      .findUnique({
        where: { id: parentId },
      })
      .accountId();
  }

  async getProviderId(parentId: string): Promise<Provider | null> {
    return this.prisma.quote
      .findUnique({
        where: { id: parentId },
      })
      .providerId();
  }
}
