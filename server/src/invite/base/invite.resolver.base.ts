import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateInviteArgs } from "./CreateInviteArgs";
import { UpdateInviteArgs } from "./UpdateInviteArgs";
import { DeleteInviteArgs } from "./DeleteInviteArgs";
import { InviteFindManyArgs } from "./InviteFindManyArgs";
import { InviteFindUniqueArgs } from "./InviteFindUniqueArgs";
import { Invite } from "./Invite";
import { InviteService } from "../invite.service";

@graphql.Resolver(() => Invite)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class InviteResolverBase {
  constructor(
    protected readonly service: InviteService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Invite",
    action: "read",
    possession: "any",
  })
  async _invitesMeta(
    @graphql.Args() args: InviteFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Invite])
  @nestAccessControl.UseRoles({
    resource: "Invite",
    action: "read",
    possession: "any",
  })
  async invites(
    @graphql.Args() args: InviteFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Invite[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Invite",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Invite, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Invite",
    action: "read",
    possession: "own",
  })
  async invite(
    @graphql.Args() args: InviteFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Invite | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Invite",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Invite)
  @nestAccessControl.UseRoles({
    resource: "Invite",
    action: "create",
    possession: "any",
  })
  async createInvite(
    @graphql.Args() args: CreateInviteArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Invite> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Invite",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Invite"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Invite)
  @nestAccessControl.UseRoles({
    resource: "Invite",
    action: "update",
    possession: "any",
  })
  async updateInvite(
    @graphql.Args() args: UpdateInviteArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Invite | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Invite",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Invite"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Invite)
  @nestAccessControl.UseRoles({
    resource: "Invite",
    action: "delete",
    possession: "any",
  })
  async deleteInvite(
    @graphql.Args() args: DeleteInviteArgs
  ): Promise<Invite | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
