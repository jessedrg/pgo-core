import { PrismaService } from "nestjs-prisma";

import {
  Prisma,
  Account,
  Offer,
  Order,
  Agent,
  Payment,
  AccountPaymentMethod,
  Invite,
  PartMessage,
  Quote,
  User,
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

  async findAccount(
    parentId: string,
    args: Prisma.OfferFindManyArgs
  ): Promise<Offer[]> {
    return this.prisma.account
      .findUnique({
        where: { id: parentId },
      })
      .account(args);
  }

  async findAccountIdInOrder(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<Order[]> {
    return this.prisma.account
      .findUnique({
        where: { id: parentId },
      })
      .accountIdInOrder(args);
  }

  async findAccountInAgent(
    parentId: string,
    args: Prisma.AgentFindManyArgs
  ): Promise<Agent[]> {
    return this.prisma.account
      .findUnique({
        where: { id: parentId },
      })
      .accountInAgent(args);
  }

  async findAccountInPayment(
    parentId: string,
    args: Prisma.PaymentFindManyArgs
  ): Promise<Payment[]> {
    return this.prisma.account
      .findUnique({
        where: { id: parentId },
      })
      .accountInPayment(args);
  }

  async findAccountPaymentMethodsInAccount(
    parentId: string,
    args: Prisma.AccountPaymentMethodFindManyArgs
  ): Promise<AccountPaymentMethod[]> {
    return this.prisma.account
      .findUnique({
        where: { id: parentId },
      })
      .accountPaymentMethodsInAccount(args);
  }

  async findInvitesInAccount(
    parentId: string,
    args: Prisma.InviteFindManyArgs
  ): Promise<Invite[]> {
    return this.prisma.account
      .findUnique({
        where: { id: parentId },
      })
      .invitesInAccount(args);
  }

  async findPartMessagesInReciever(
    parentId: string,
    args: Prisma.PartMessageFindManyArgs
  ): Promise<PartMessage[]> {
    return this.prisma.account
      .findUnique({
        where: { id: parentId },
      })
      .partMessagesInReciever(args);
  }

  async findPartMessagesInSender(
    parentId: string,
    args: Prisma.PartMessageFindManyArgs
  ): Promise<PartMessage[]> {
    return this.prisma.account
      .findUnique({
        where: { id: parentId },
      })
      .partMessagesInSender(args);
  }

  async findQuote(
    parentId: string,
    args: Prisma.QuoteFindManyArgs
  ): Promise<Quote[]> {
    return this.prisma.account
      .findUnique({
        where: { id: parentId },
      })
      .quote(args);
  }

  async findUsersInAccount(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.account
      .findUnique({
        where: { id: parentId },
      })
      .usersInAccount(args);
  }
}
