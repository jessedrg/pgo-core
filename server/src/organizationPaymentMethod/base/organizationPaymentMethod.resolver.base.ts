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
import { CreateOrganizationPaymentMethodArgs } from "./CreateOrganizationPaymentMethodArgs";
import { UpdateOrganizationPaymentMethodArgs } from "./UpdateOrganizationPaymentMethodArgs";
import { DeleteOrganizationPaymentMethodArgs } from "./DeleteOrganizationPaymentMethodArgs";
import { OrganizationPaymentMethodFindManyArgs } from "./OrganizationPaymentMethodFindManyArgs";
import { OrganizationPaymentMethodFindUniqueArgs } from "./OrganizationPaymentMethodFindUniqueArgs";
import { OrganizationPaymentMethod } from "./OrganizationPaymentMethod";
import { OrganizationFindManyArgs } from "../../organization/base/OrganizationFindManyArgs";
import { Organization } from "../../organization/base/Organization";
import { OrganizationPaymentMethodService } from "../organizationPaymentMethod.service";

@graphql.Resolver(() => OrganizationPaymentMethod)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OrganizationPaymentMethodResolverBase {
  constructor(
    protected readonly service: OrganizationPaymentMethodService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "OrganizationPaymentMethod",
    action: "read",
    possession: "any",
  })
  async _organizationPaymentMethodsMeta(
    @graphql.Args() args: OrganizationPaymentMethodFindManyArgs
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

  @graphql.Query(() => [OrganizationPaymentMethod])
  @nestAccessControl.UseRoles({
    resource: "OrganizationPaymentMethod",
    action: "read",
    possession: "any",
  })
  async organizationPaymentMethods(
    @graphql.Args() args: OrganizationPaymentMethodFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<OrganizationPaymentMethod[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "OrganizationPaymentMethod",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => OrganizationPaymentMethod, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "OrganizationPaymentMethod",
    action: "read",
    possession: "own",
  })
  async organizationPaymentMethod(
    @graphql.Args() args: OrganizationPaymentMethodFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<OrganizationPaymentMethod | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "OrganizationPaymentMethod",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => OrganizationPaymentMethod)
  @nestAccessControl.UseRoles({
    resource: "OrganizationPaymentMethod",
    action: "create",
    possession: "any",
  })
  async createOrganizationPaymentMethod(
    @graphql.Args() args: CreateOrganizationPaymentMethodArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<OrganizationPaymentMethod> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "OrganizationPaymentMethod",
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
        `providing the properties: ${properties} on ${"OrganizationPaymentMethod"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => OrganizationPaymentMethod)
  @nestAccessControl.UseRoles({
    resource: "OrganizationPaymentMethod",
    action: "update",
    possession: "any",
  })
  async updateOrganizationPaymentMethod(
    @graphql.Args() args: UpdateOrganizationPaymentMethodArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<OrganizationPaymentMethod | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "OrganizationPaymentMethod",
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
        `providing the properties: ${properties} on ${"OrganizationPaymentMethod"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => OrganizationPaymentMethod)
  @nestAccessControl.UseRoles({
    resource: "OrganizationPaymentMethod",
    action: "delete",
    possession: "any",
  })
  async deleteOrganizationPaymentMethod(
    @graphql.Args() args: DeleteOrganizationPaymentMethodArgs
  ): Promise<OrganizationPaymentMethod | null> {
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

  @graphql.ResolveField(() => [Organization])
  @nestAccessControl.UseRoles({
    resource: "OrganizationPaymentMethod",
    action: "read",
    possession: "any",
  })
  async organization(
    @graphql.Parent() parent: OrganizationPaymentMethod,
    @graphql.Args() args: OrganizationFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Organization[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Organization",
    });
    const results = await this.service.findOrganization(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
