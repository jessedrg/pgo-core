import { PrismaService } from "nestjs-prisma";

import {
  Prisma,
  Order,
  OrderItem,
  Payment,
  Production,
  Account,
  Organization,
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

  async findOrderInOrderItem(
    parentId: string,
    args: Prisma.OrderItemFindManyArgs
  ): Promise<OrderItem[]> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .orderInOrderItem(args);
  }

  async findOrderInPayment(
    parentId: string,
    args: Prisma.PaymentFindManyArgs
  ): Promise<Payment[]> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .orderInPayment(args);
  }

  async findProductionsInOrders(
    parentId: string,
    args: Prisma.ProductionFindManyArgs
  ): Promise<Production[]> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .productionsInOrders(args);
  }

  async getAcountId(parentId: string): Promise<Account | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .acountId();
  }

  async getOrganizationId(parentId: string): Promise<Organization | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .organizationId();
  }

  async getShipmentId(parentId: string): Promise<Shipment | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .shipmentId();
  }
}
