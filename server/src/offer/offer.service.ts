import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { OfferServiceBase } from "./base/offer.service.base";

@Injectable()
export class OfferService extends OfferServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
