import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { OrganizationPaymentMethodServiceBase } from "./base/organizationPaymentMethod.service.base";

@Injectable()
export class OrganizationPaymentMethodService extends OrganizationPaymentMethodServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
