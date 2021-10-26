import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PaymentServiceBase } from "./base/payment.service.base";

@Injectable()
export class PaymentService extends PaymentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
