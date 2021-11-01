import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  Account,
  Agent,
  Offer,
  PartMessage,
  Quote,
  User,
  Organization,
} from "@prisma/client";

export class AccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AccountFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountFindManyArgs>
  ): Promise<number> {
    return this.prisma.account.count(args);
  }

  async findMany<T extends Prisma.AccountFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountFindManyArgs>
  ): Promise<Account[]> {
    return this.prisma.account.findMany(args);
  }
  async findOne<T extends Prisma.AccountFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountFindUniqueArgs>
  ): Promise<Account | null> {
    return this.prisma.account.findUnique(args);
  }
  async create<T extends Prisma.AccountCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountCreateArgs>
  ): Promise<Account> {
    return this.prisma.account.create<T>(args);
  }
  async update<T extends Prisma.AccountUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountUpdateArgs>
  ): Promise<Account> {
    return this.prisma.account.update<T>(args);
  }
  async delete<T extends Prisma.AccountDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountDeleteArgs>
  ): Promise<Account> {
    return this.prisma.account.delete(args);
  }

  async findAgents(
    parentId: string,
    args: Prisma.AgentFindManyArgs
  ): Promise<Agent[]> {
    return this.prisma.account
      .findUnique({
        where: { id: parentId },
      })
      .agents(args);
  }

  async findOffers(
    parentId: string,
    args: Prisma.OfferFindManyArgs
  ): Promise<Offer[]> {
    return this.prisma.account
      .findUnique({
        where: { id: parentId },
      })
      .offers(args);
  }

  async findPartMessages(
    parentId: string,
    args: Prisma.PartMessageFindManyArgs
  ): Promise<PartMessage[]> {
    return this.prisma.account
      .findUnique({
        where: { id: parentId },
      })
      .partMessages(args);
  }

  async findPartSender(
    parentId: string,
    args: Prisma.PartMessageFindManyArgs
  ): Promise<PartMessage[]> {
    return this.prisma.account
      .findUnique({
        where: { id: parentId },
      })
      .partSender(args);
  }

  async findQuotes(
    parentId: string,
    args: Prisma.QuoteFindManyArgs
  ): Promise<Quote[]> {
    return this.prisma.account
      .findUnique({
        where: { id: parentId },
      })
      .quotes(args);
  }

  async findUsers(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.account
      .findUnique({
        where: { id: parentId },
      })
      .users(args);
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.account
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }
}
