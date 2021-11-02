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
import { CreatePartMessageArgs } from "./CreatePartMessageArgs";
import { UpdatePartMessageArgs } from "./UpdatePartMessageArgs";
import { DeletePartMessageArgs } from "./DeletePartMessageArgs";
import { PartMessageFindManyArgs } from "./PartMessageFindManyArgs";
import { PartMessageFindUniqueArgs } from "./PartMessageFindUniqueArgs";
import { PartMessage } from "./PartMessage";
import { Part } from "../../part/base/Part";
import { Account } from "../../account/base/Account";
import { PartMessageService } from "../partMessage.service";

@graphql.Resolver(() => PartMessage)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PartMessageResolverBase {
  constructor(
    protected readonly service: PartMessageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PartMessage",
    action: "read",
    possession: "any",
  })
  async _partMessagesMeta(
    @graphql.Args() args: PartMessageFindManyArgs
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

  @graphql.Query(() => [PartMessage])
  @nestAccessControl.UseRoles({
    resource: "PartMessage",
    action: "read",
    possession: "any",
  })
  async partMessages(
    @graphql.Args() args: PartMessageFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PartMessage[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "PartMessage",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => PartMessage, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PartMessage",
    action: "read",
    possession: "own",
  })
  async partMessage(
    @graphql.Args() args: PartMessageFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PartMessage | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "PartMessage",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => PartMessage)
  @nestAccessControl.UseRoles({
    resource: "PartMessage",
    action: "create",
    possession: "any",
  })
  async createPartMessage(
    @graphql.Args() args: CreatePartMessageArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PartMessage> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "PartMessage",
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
        `providing the properties: ${properties} on ${"PartMessage"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        part: args.data.part
          ? {
              connect: args.data.part,
            }
          : undefined,

        sender: args.data.sender
          ? {
              connect: args.data.sender,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => PartMessage)
  @nestAccessControl.UseRoles({
    resource: "PartMessage",
    action: "update",
    possession: "any",
  })
  async updatePartMessage(
    @graphql.Args() args: UpdatePartMessageArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PartMessage | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "PartMessage",
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
        `providing the properties: ${properties} on ${"PartMessage"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          part: args.data.part
            ? {
                connect: args.data.part,
              }
            : undefined,

          sender: args.data.sender
            ? {
                connect: args.data.sender,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => PartMessage)
  @nestAccessControl.UseRoles({
    resource: "PartMessage",
    action: "delete",
    possession: "any",
  })
  async deletePartMessage(
    @graphql.Args() args: DeletePartMessageArgs
  ): Promise<PartMessage | null> {
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

  @graphql.ResolveField(() => Part, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PartMessage",
    action: "read",
    possession: "any",
  })
  async part(
    @graphql.Parent() parent: PartMessage,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Part | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Part",
    });
    const result = await this.service.getPart(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => Account, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PartMessage",
    action: "read",
    possession: "any",
  })
  async sender(
    @graphql.Parent() parent: PartMessage,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Account | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Account",
    });
    const result = await this.service.getSender(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
