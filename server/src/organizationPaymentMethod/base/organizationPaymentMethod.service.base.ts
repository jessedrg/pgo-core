import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  OrganizationPaymentMethod,
  Organization,
} from "@prisma/client";

export class OrganizationPaymentMethodServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OrganizationPaymentMethodFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationPaymentMethodFindManyArgs>
  ): Promise<number> {
    return this.prisma.organizationPaymentMethod.count(args);
  }

  async findMany<T extends Prisma.OrganizationPaymentMethodFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationPaymentMethodFindManyArgs>
  ): Promise<OrganizationPaymentMethod[]> {
    return this.prisma.organizationPaymentMethod.findMany(args);
  }
  async findOne<T extends Prisma.OrganizationPaymentMethodFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationPaymentMethodFindUniqueArgs>
  ): Promise<OrganizationPaymentMethod | null> {
    return this.prisma.organizationPaymentMethod.findUnique(args);
  }
  async create<T extends Prisma.OrganizationPaymentMethodCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationPaymentMethodCreateArgs>
  ): Promise<OrganizationPaymentMethod> {
    return this.prisma.organizationPaymentMethod.create<T>(args);
  }
  async update<T extends Prisma.OrganizationPaymentMethodUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationPaymentMethodUpdateArgs>
  ): Promise<OrganizationPaymentMethod> {
    return this.prisma.organizationPaymentMethod.update<T>(args);
  }
  async delete<T extends Prisma.OrganizationPaymentMethodDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrganizationPaymentMethodDeleteArgs>
  ): Promise<OrganizationPaymentMethod> {
    return this.prisma.organizationPaymentMethod.delete(args);
  }

  async findOrganization(
    parentId: string,
    args: Prisma.OrganizationFindManyArgs
  ): Promise<Organization[]> {
    return this.prisma.organizationPaymentMethod
      .findUnique({
        where: { id: parentId },
      })
      .organization(args);
  }
}
