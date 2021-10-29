import { PrismaService } from "nestjs-prisma";
import { Prisma, PartConfiguration } from "@prisma/client";

export class PartConfigurationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PartConfigurationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartConfigurationFindManyArgs>
  ): Promise<number> {
    return this.prisma.partConfiguration.count(args);
  }

  async findMany<T extends Prisma.PartConfigurationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartConfigurationFindManyArgs>
  ): Promise<PartConfiguration[]> {
    return this.prisma.partConfiguration.findMany(args);
  }
  async findOne<T extends Prisma.PartConfigurationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartConfigurationFindUniqueArgs>
  ): Promise<PartConfiguration | null> {
    return this.prisma.partConfiguration.findUnique(args);
  }
  async create<T extends Prisma.PartConfigurationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartConfigurationCreateArgs>
  ): Promise<PartConfiguration> {
    return this.prisma.partConfiguration.create<T>(args);
  }
  async update<T extends Prisma.PartConfigurationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartConfigurationUpdateArgs>
  ): Promise<PartConfiguration> {
    return this.prisma.partConfiguration.update<T>(args);
  }
  async delete<T extends Prisma.PartConfigurationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PartConfigurationDeleteArgs>
  ): Promise<PartConfiguration> {
    return this.prisma.partConfiguration.delete(args);
  }
}
