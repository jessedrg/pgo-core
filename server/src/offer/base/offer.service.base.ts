import { PrismaService } from "nestjs-prisma";
import { Prisma, Offer, Account, Part } from "@prisma/client";

export class OfferServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OfferFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfferFindManyArgs>
  ): Promise<number> {
    return this.prisma.offer.count(args);
  }

  async findMany<T extends Prisma.OfferFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfferFindManyArgs>
  ): Promise<Offer[]> {
    return this.prisma.offer.findMany(args);
  }
  async findOne<T extends Prisma.OfferFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfferFindUniqueArgs>
  ): Promise<Offer | null> {
    return this.prisma.offer.findUnique(args);
  }
  async create<T extends Prisma.OfferCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfferCreateArgs>
  ): Promise<Offer> {
    return this.prisma.offer.create<T>(args);
  }
  async update<T extends Prisma.OfferUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfferUpdateArgs>
  ): Promise<Offer> {
    return this.prisma.offer.update<T>(args);
  }
  async delete<T extends Prisma.OfferDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OfferDeleteArgs>
  ): Promise<Offer> {
    return this.prisma.offer.delete(args);
  }

  async getAccountId(parentId: string): Promise<Account | null> {
    return this.prisma.offer
      .findUnique({
        where: { id: parentId },
      })
      .accountId();
  }

  async getPartId(parentId: string): Promise<Part | null> {
    return this.prisma.offer
      .findUnique({
        where: { id: parentId },
      })
      .partId();
  }
}
