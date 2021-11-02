import { PrismaService } from "nestjs-prisma";

import {
  Prisma,
  Part,
  PartMessage,
  ProductionItem,
  QuoteItem,
  Account,
  MediaFile,
  Offer,
  Organization,
  PartConfiguration,
  PartOnShape,
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

  async getAccount(parentId: string): Promise<Account | null> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .account();
  }

  async getBlueprint(parentId: string): Promise<MediaFile | null> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .blueprint();
  }

  async getOffer(parentId: string): Promise<Offer | null> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .offer();
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }

  async getOriginalBlueprint(parentId: string): Promise<MediaFile | null> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .originalBlueprint();
  }

  async getOriginalModel(parentId: string): Promise<MediaFile | null> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .originalModel();
  }

  async getPartConfiguration(
    parentId: string
  ): Promise<PartConfiguration | null> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .partConfiguration();
  }

  async getPartOnShape(parentId: string): Promise<PartOnShape | null> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .partOnShape();
  }

  async getStepModel(parentId: string): Promise<MediaFile | null> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .stepModel();
  }

  async getStlModel(parentId: string): Promise<MediaFile | null> {
    return this.prisma.part
      .findUnique({
        where: { id: parentId },
      })
      .stlModel();
  }
}
