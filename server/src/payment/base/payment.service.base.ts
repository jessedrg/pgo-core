import { PrismaService } from "nestjs-prisma";
import { Prisma, Payment, Order } from "@prisma/client";

export class PaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PaymentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentFindManyArgs>
  ): Promise<number> {
    return this.prisma.payment.count(args);
  }

  async findMany<T extends Prisma.PaymentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentFindManyArgs>
  ): Promise<Payment[]> {
    return this.prisma.payment.findMany(args);
  }
  async findOne<T extends Prisma.PaymentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentFindUniqueArgs>
  ): Promise<Payment | null> {
    return this.prisma.payment.findUnique(args);
  }
  async create<T extends Prisma.PaymentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentCreateArgs>
  ): Promise<Payment> {
    return this.prisma.payment.create<T>(args);
  }
  async update<T extends Prisma.PaymentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentUpdateArgs>
  ): Promise<Payment> {
    return this.prisma.payment.update<T>(args);
  }
  async delete<T extends Prisma.PaymentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PaymentDeleteArgs>
  ): Promise<Payment> {
    return this.prisma.payment.delete(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<Order[]> {
    return this.prisma.payment
      .findUnique({
        where: { id: parentId },
      })
      .orders(args);
  }
}
