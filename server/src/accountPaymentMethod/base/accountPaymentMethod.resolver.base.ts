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
import { CreateAccountPaymentMethodArgs } from "./CreateAccountPaymentMethodArgs";
import { UpdateAccountPaymentMethodArgs } from "./UpdateAccountPaymentMethodArgs";
import { DeleteAccountPaymentMethodArgs } from "./DeleteAccountPaymentMethodArgs";
import { AccountPaymentMethodFindManyArgs } from "./AccountPaymentMethodFindManyArgs";
import { AccountPaymentMethodFindUniqueArgs } from "./AccountPaymentMethodFindUniqueArgs";
import { AccountPaymentMethod } from "./AccountPaymentMethod";
import { AccountPaymentMethodService } from "../accountPaymentMethod.service";

@graphql.Resolver(() => AccountPaymentMethod)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AccountPaymentMethodResolverBase {
  constructor(
    protected readonly service: AccountPaymentMethodService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AccountPaymentMethod",
    action: "read",
    possession: "any",
  })
  async _accountPaymentMethodsMeta(
    @graphql.Args() args: AccountPaymentMethodFindManyArgs
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

  @graphql.Query(() => [AccountPaymentMethod])
  @nestAccessControl.UseRoles({
    resource: "AccountPaymentMethod",
    action: "read",
    possession: "any",
  })
  async accountPaymentMethods(
    @graphql.Args() args: AccountPaymentMethodFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<AccountPaymentMethod[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "AccountPaymentMethod",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => AccountPaymentMethod, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AccountPaymentMethod",
    action: "read",
    possession: "own",
  })
  async accountPaymentMethod(
    @graphql.Args() args: AccountPaymentMethodFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<AccountPaymentMethod | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "AccountPaymentMethod",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => AccountPaymentMethod)
  @nestAccessControl.UseRoles({
    resource: "AccountPaymentMethod",
    action: "create",
    possession: "any",
  })
  async createAccountPaymentMethod(
    @graphql.Args() args: CreateAccountPaymentMethodArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<AccountPaymentMethod> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "AccountPaymentMethod",
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
        `providing the properties: ${properties} on ${"AccountPaymentMethod"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => AccountPaymentMethod)
  @nestAccessControl.UseRoles({
    resource: "AccountPaymentMethod",
    action: "update",
    possession: "any",
  })
  async updateAccountPaymentMethod(
    @graphql.Args() args: UpdateAccountPaymentMethodArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<AccountPaymentMethod | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "AccountPaymentMethod",
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
        `providing the properties: ${properties} on ${"AccountPaymentMethod"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => AccountPaymentMethod)
  @nestAccessControl.UseRoles({
    resource: "AccountPaymentMethod",
    action: "delete",
    possession: "any",
  })
  async deleteAccountPaymentMethod(
    @graphql.Args() args: DeleteAccountPaymentMethodArgs
  ): Promise<AccountPaymentMethod | null> {
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
