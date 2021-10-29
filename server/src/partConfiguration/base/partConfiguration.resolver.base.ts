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
import { CreatePartConfigurationArgs } from "./CreatePartConfigurationArgs";
import { UpdatePartConfigurationArgs } from "./UpdatePartConfigurationArgs";
import { DeletePartConfigurationArgs } from "./DeletePartConfigurationArgs";
import { PartConfigurationFindManyArgs } from "./PartConfigurationFindManyArgs";
import { PartConfigurationFindUniqueArgs } from "./PartConfigurationFindUniqueArgs";
import { PartConfiguration } from "./PartConfiguration";
import { PartConfigurationService } from "../partConfiguration.service";

@graphql.Resolver(() => PartConfiguration)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PartConfigurationResolverBase {
  constructor(
    protected readonly service: PartConfigurationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PartConfiguration",
    action: "read",
    possession: "any",
  })
  async _partConfigurationsMeta(
    @graphql.Args() args: PartConfigurationFindManyArgs
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

  @graphql.Query(() => [PartConfiguration])
  @nestAccessControl.UseRoles({
    resource: "PartConfiguration",
    action: "read",
    possession: "any",
  })
  async partConfigurations(
    @graphql.Args() args: PartConfigurationFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PartConfiguration[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "PartConfiguration",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => PartConfiguration, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PartConfiguration",
    action: "read",
    possession: "own",
  })
  async partConfiguration(
    @graphql.Args() args: PartConfigurationFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PartConfiguration | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "PartConfiguration",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => PartConfiguration)
  @nestAccessControl.UseRoles({
    resource: "PartConfiguration",
    action: "create",
    possession: "any",
  })
  async createPartConfiguration(
    @graphql.Args() args: CreatePartConfigurationArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PartConfiguration> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "PartConfiguration",
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
        `providing the properties: ${properties} on ${"PartConfiguration"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => PartConfiguration)
  @nestAccessControl.UseRoles({
    resource: "PartConfiguration",
    action: "update",
    possession: "any",
  })
  async updatePartConfiguration(
    @graphql.Args() args: UpdatePartConfigurationArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PartConfiguration | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "PartConfiguration",
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
        `providing the properties: ${properties} on ${"PartConfiguration"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => PartConfiguration)
  @nestAccessControl.UseRoles({
    resource: "PartConfiguration",
    action: "delete",
    possession: "any",
  })
  async deletePartConfiguration(
    @graphql.Args() args: DeletePartConfigurationArgs
  ): Promise<PartConfiguration | null> {
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
