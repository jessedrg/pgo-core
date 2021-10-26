import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  Organization,
  AccountPaymentMethod,
  Order,
  User,
  Address,
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

  async findAccountPaymentMethodInOrganization(
    parentId: string,
    args: Prisma.AccountPaymentMethodFindManyArgs
  ): Promise<AccountPaymentMethod[]> {
    return this.prisma.organization
      .findUnique({
        where: { id: parentId },
      })
      .accountPaymentMethodInOrganization(args);
  }

  async findOrganizationInOrder(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<Order[]> {
    return this.prisma.organization
      .findUnique({
        where: { id: parentId },
      })
      .organizationInOrder(args);
  }

  async findUsersInOrganization(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.organization
      .findUnique({
        where: { id: parentId },
      })
      .usersInOrganization(args);
  }

  async getContactAdressId(parentId: string): Promise<Address | null> {
    return this.prisma.organization
      .findUnique({
        where: { id: parentId },
      })
      .contactAdressId();
  }

  async getPaymenMethodId(
    parentId: string
  ): Promise<AccountPaymentMethod | null> {
    return this.prisma.organization
      .findUnique({
        where: { id: parentId },
      })
      .paymenMethodId();
  }
}
