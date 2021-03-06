import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  Organization,
  Account,
  Address,
  Part,
  OrganizationPaymentMethod,
} from "@prisma/client";

export class OrganizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OrganizationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationFindManyArgs>
  ): Promise<number> {
    return this.prisma.organization.count(args);
  }

  async findMany<T extends Prisma.OrganizationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationFindManyArgs>
  ): Promise<Organization[]> {
    return this.prisma.organization.findMany(args);
  }
  async findOne<T extends Prisma.OrganizationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationFindUniqueArgs>
  ): Promise<Organization | null> {
    return this.prisma.organization.findUnique(args);
  }
  async create<T extends Prisma.OrganizationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationCreateArgs>
  ): Promise<Organization> {
    return this.prisma.organization.create<T>(args);
  }
  async update<T extends Prisma.OrganizationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationUpdateArgs>
  ): Promise<Organization> {
    return this.prisma.organization.update<T>(args);
  }
  async delete<T extends Prisma.OrganizationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationDeleteArgs>
  ): Promise<Organization> {
    return this.prisma.organization.delete(args);
  }

  async findAccounts(
    parentId: string,
    args: Prisma.AccountFindManyArgs
  ): Promise<Account[]> {
    return this.prisma.organization
      .findUnique({
        where: { id: parentId },
      })
      .accounts(args);
  }

  async findAddresses(
    parentId: string,
    args: Prisma.AddressFindManyArgs
  ): Promise<Address[]> {
    return this.prisma.organization
      .findUnique({
        where: { id: parentId },
      })
      .addresses(args);
  }

  async findParts(
    parentId: string,
    args: Prisma.PartFindManyArgs
  ): Promise<Part[]> {
    return this.prisma.organization
      .findUnique({
        where: { id: parentId },
      })
      .parts(args);
  }

  async getPaymentMethod(
    parentId: string
  ): Promise<OrganizationPaymentMethod | null> {
    return this.prisma.organization
      .findUnique({
        where: { id: parentId },
      })
      .paymentMethod();
  }
}
