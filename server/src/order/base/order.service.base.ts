import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  Order,
  OrderItem,
  Production,
  Organization,
  Payment,
  Shipment,
} from "@prisma/client";

export class OrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OrderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderFindManyArgs>
  ): Promise<number> {
    return this.prisma.order.count(args);
  }

  async findMany<T extends Prisma.OrderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderFindManyArgs>
  ): Promise<Order[]> {
    return this.prisma.order.findMany(args);
  }
  async findOne<T extends Prisma.OrderFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderFindUniqueArgs>
  ): Promise<Order | null> {
    return this.prisma.order.findUnique(args);
  }
  async create<T extends Prisma.OrderCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderCreateArgs>
  ): Promise<Order> {
    return this.prisma.order.create<T>(args);
  }
  async update<T extends Prisma.OrderUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderUpdateArgs>
  ): Promise<Order> {
    return this.prisma.order.update<T>(args);
  }
  async delete<T extends Prisma.OrderDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderDeleteArgs>
  ): Promise<Order> {
    return this.prisma.order.delete(args);
  }

  async findOrderItems(
    parentId: string,
    args: Prisma.OrderItemFindManyArgs
  ): Promise<OrderItem[]> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .orderItems(args);
  }

  async findProductions(
    parentId: string,
    args: Prisma.ProductionFindManyArgs
  ): Promise<Production[]> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .productions(args);
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }

  async getPayment(parentId: string): Promise<Payment | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .payment();
  }

  async getShipment(parentId: string): Promise<Shipment | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .shipment();
  }
}
