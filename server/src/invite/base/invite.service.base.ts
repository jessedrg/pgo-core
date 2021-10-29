import { PrismaService } from "nestjs-prisma";
import { Prisma, Invite } from "@prisma/client";

export class InviteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.InviteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteFindManyArgs>
  ): Promise<number> {
    return this.prisma.invite.count(args);
  }

  async findMany<T extends Prisma.InviteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteFindManyArgs>
  ): Promise<Invite[]> {
    return this.prisma.invite.findMany(args);
  }
  async findOne<T extends Prisma.InviteFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteFindUniqueArgs>
  ): Promise<Invite | null> {
    return this.prisma.invite.findUnique(args);
  }
  async create<T extends Prisma.InviteCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteCreateArgs>
  ): Promise<Invite> {
    return this.prisma.invite.create<T>(args);
  }
  async update<T extends Prisma.InviteUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteUpdateArgs>
  ): Promise<Invite> {
    return this.prisma.invite.update<T>(args);
  }
  async delete<T extends Prisma.InviteDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.InviteDeleteArgs>
  ): Promise<Invite> {
    return this.prisma.invite.delete(args);
  }
}
