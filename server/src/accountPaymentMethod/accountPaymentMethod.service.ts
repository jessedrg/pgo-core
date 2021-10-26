import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AccountPaymentMethodServiceBase } from "./base/accountPaymentMethod.service.base";

@Injectable()
export class AccountPaymentMethodService extends AccountPaymentMethodServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
