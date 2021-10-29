import { PrismaService } from "nestjs-prisma";
import { Prisma, Shipment } from "@prisma/client";

export class ShipmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ShipmentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShipmentFindManyArgs>
  ): Promise<number> {
    return this.prisma.shipment.count(args);
  }

  async findMany<T extends Prisma.ShipmentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShipmentFindManyArgs>
  ): Promise<Shipment[]> {
    return this.prisma.shipment.findMany(args);
  }
  async findOne<T extends Prisma.ShipmentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShipmentFindUniqueArgs>
  ): Promise<Shipment | null> {
    return this.prisma.shipment.findUnique(args);
  }
  async create<T extends Prisma.ShipmentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShipmentCreateArgs>
  ): Promise<Shipment> {
    return this.prisma.shipment.create<T>(args);
  }
  async update<T extends Prisma.ShipmentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShipmentUpdateArgs>
  ): Promise<Shipment> {
    return this.prisma.shipment.update<T>(args);
  }
  async delete<T extends Prisma.ShipmentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ShipmentDeleteArgs>
  ): Promise<Shipment> {
    return this.prisma.shipment.delete(args);
  }
}
