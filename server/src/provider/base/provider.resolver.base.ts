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
import { CreateProviderArgs } from "./CreateProviderArgs";
import { UpdateProviderArgs } from "./UpdateProviderArgs";
import { DeleteProviderArgs } from "./DeleteProviderArgs";
import { ProviderFindManyArgs } from "./ProviderFindManyArgs";
import { ProviderFindUniqueArgs } from "./ProviderFindUniqueArgs";
import { Provider } from "./Provider";
import { ProviderService } from "../provider.service";

@graphql.Resolver(() => Provider)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProviderResolverBase {
  constructor(
    protected readonly service: ProviderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Provider",
    action: "read",
    possession: "any",
  })
  async _providersMeta(
    @graphql.Args() args: ProviderFindManyArgs
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

  @graphql.Query(() => [Provider])
  @nestAccessControl.UseRoles({
    resource: "Provider",
    action: "read",
    possession: "any",
  })
  async providers(
    @graphql.Args() args: ProviderFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Provider[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Provider",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Provider, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Provider",
    action: "read",
    possession: "own",
  })
  async provider(
    @graphql.Args() args: ProviderFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Provider | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Provider",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Provider)
  @nestAccessControl.UseRoles({
    resource: "Provider",
    action: "create",
    possession: "any",
  })
  async createProvider(
    @graphql.Args() args: CreateProviderArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Provider> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Provider",
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
        `providing the properties: ${properties} on ${"Provider"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Provider)
  @nestAccessControl.UseRoles({
    resource: "Provider",
    action: "update",
    possession: "any",
  })
  async updateProvider(
    @graphql.Args() args: UpdateProviderArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Provider | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Provider",
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
        `providing the properties: ${properties} on ${"Provider"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => Provider)
  @nestAccessControl.UseRoles({
    resource: "Provider",
    action: "delete",
    possession: "any",
  })
  async deleteProvider(
    @graphql.Args() args: DeleteProviderArgs
  ): Promise<Provider | null> {
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
