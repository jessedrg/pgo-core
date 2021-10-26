import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { AccountServiceBase } from "./base/account.service.base";

@Injectable()
export class AccountService extends AccountServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
