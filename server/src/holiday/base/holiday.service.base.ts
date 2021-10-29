import { PrismaService } from "nestjs-prisma";
import { Prisma, Holiday } from "@prisma/client";

export class HolidayServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.HolidayFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HolidayFindManyArgs>
  ): Promise<number> {
    return this.prisma.holiday.count(args);
  }

  async findMany<T extends Prisma.HolidayFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HolidayFindManyArgs>
  ): Promise<Holiday[]> {
    return this.prisma.holiday.findMany(args);
  }
  async findOne<T extends Prisma.HolidayFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.HolidayFindUniqueArgs>
  ): Promise<Holiday | null> {
    return this.prisma.holiday.findUnique(args);
  }
  async create<T extends Prisma.HolidayCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HolidayCreateArgs>
  ): Promise<Holiday> {
    return this.prisma.holiday.create<T>(args);
  }
  async update<T extends Prisma.HolidayUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HolidayUpdateArgs>
  ): Promise<Holiday> {
    return this.prisma.holiday.update<T>(args);
  }
  async delete<T extends Prisma.HolidayDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.HolidayDeleteArgs>
  ): Promise<Holiday> {
    return this.prisma.holiday.delete(args);
  }
}
