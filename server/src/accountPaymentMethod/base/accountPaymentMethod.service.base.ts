import { PrismaService } from "nestjs-prisma";
import { Prisma, AccountPaymentMethod } from "@prisma/client";

export class AccountPaymentMethodServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AccountPaymentMethodFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountPaymentMethodFindManyArgs>
  ): Promise<number> {
    return this.prisma.accountPaymentMethod.count(args);
  }

  async findMany<T extends Prisma.AccountPaymentMethodFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountPaymentMethodFindManyArgs>
  ): Promise<AccountPaymentMethod[]> {
    return this.prisma.accountPaymentMethod.findMany(args);
  }
  async findOne<T extends Prisma.AccountPaymentMethodFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountPaymentMethodFindUniqueArgs>
  ): Promise<AccountPaymentMethod | null> {
    return this.prisma.accountPaymentMethod.findUnique(args);
  }
  async create<T extends Prisma.AccountPaymentMethodCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountPaymentMethodCreateArgs>
  ): Promise<AccountPaymentMethod> {
    return this.prisma.accountPaymentMethod.create<T>(args);
  }
  async update<T extends Prisma.AccountPaymentMethodUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountPaymentMethodUpdateArgs>
  ): Promise<AccountPaymentMethod> {
    return this.prisma.accountPaymentMethod.update<T>(args);
  }
  async delete<T extends Prisma.AccountPaymentMethodDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccountPaymentMethodDeleteArgs>
  ): Promise<AccountPaymentMethod> {
    return this.prisma.accountPaymentMethod.delete(args);
  }
}
