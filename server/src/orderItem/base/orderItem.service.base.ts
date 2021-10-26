import { PrismaService } from "nestjs-prisma";
import { Prisma, OrderItem, Order, Part } from "@prisma/client";

export class OrderItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OrderItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemFindManyArgs>
  ): Promise<number> {
    return this.prisma.orderItem.count(args);
  }

  async findMany<T extends Prisma.OrderItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemFindManyArgs>
  ): Promise<OrderItem[]> {
    return this.prisma.orderItem.findMany(args);
  }
  async findOne<T extends Prisma.OrderItemFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemFindUniqueArgs>
  ): Promise<OrderItem | null> {
    return this.prisma.orderItem.findUnique(args);
  }
  async create<T extends Prisma.OrderItemCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemCreateArgs>
  ): Promise<OrderItem> {
    return this.prisma.orderItem.create<T>(args);
  }
  async update<T extends Prisma.OrderItemUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemUpdateArgs>
  ): Promise<OrderItem> {
    return this.prisma.orderItem.update<T>(args);
  }
  async delete<T extends Prisma.OrderItemDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemDeleteArgs>
  ): Promise<OrderItem> {
    return this.prisma.orderItem.delete(args);
  }

  async getOrderId(parentId: string): Promise<Order | null> {
    return this.prisma.orderItem
      .findUnique({
        where: { id: parentId },
      })
      .orderId();
  }

  async getPartId(parentId: string): Promise<Part | null> {
    return this.prisma.orderItem
      .findUnique({
        where: { id: parentId },
      })
      .partId();
  }
}
