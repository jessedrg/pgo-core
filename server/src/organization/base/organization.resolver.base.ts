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
import { CreateOrganizationArgs } from "./CreateOrganizationArgs";
import { UpdateOrganizationArgs } from "./UpdateOrganizationArgs";
import { DeleteOrganizationArgs } from "./DeleteOrganizationArgs";
import { OrganizationFindManyArgs } from "./OrganizationFindManyArgs";
import { OrganizationFindUniqueArgs } from "./OrganizationFindUniqueArgs";
import { Organization } from "./Organization";
import { OrganizationService } from "../organization.service";

@graphql.Resolver(() => Organization)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OrganizationResolverBase {
  constructor(
    protected readonly service: OrganizationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  async _organizationsMeta(
    @graphql.Args() args: OrganizationFindManyArgs
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

  @graphql.Query(() => [Organization])
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  async organizations(
    @graphql.Args() args: OrganizationFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Organization[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Organization",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Organization, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "own",
  })
  async organization(
    @graphql.Args() args: OrganizationFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Organization | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Organization",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Organization)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "create",
    possession: "any",
  })
  async createOrganization(
    @graphql.Args() args: CreateOrganizationArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Organization> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Organization",
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
        `providing the properties: ${properties} on ${"Organization"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Organization)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async updateOrganization(
    @graphql.Args() args: UpdateOrganizationArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Organization | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Organization",
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
        `providing the properties: ${properties} on ${"Organization"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => Organization)
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "delete",
    possession: "any",
  })
  async deleteOrganization(
    @graphql.Args() args: DeleteOrganizationArgs
  ): Promise<Organization | null> {
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
