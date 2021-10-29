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
import { CreateAccountArgs } from "./CreateAccountArgs";
import { UpdateAccountArgs } from "./UpdateAccountArgs";
import { DeleteAccountArgs } from "./DeleteAccountArgs";
import { AccountFindManyArgs } from "./AccountFindManyArgs";
import { AccountFindUniqueArgs } from "./AccountFindUniqueArgs";
import { Account } from "./Account";
import { OfferFindManyArgs } from "../../offer/base/OfferFindManyArgs";
import { Offer } from "../../offer/base/Offer";
import { PartMessageFindManyArgs } from "../../partMessage/base/PartMessageFindManyArgs";
import { PartMessage } from "../../partMessage/base/PartMessage";
import { QuoteFindManyArgs } from "../../quote/base/QuoteFindManyArgs";
import { Quote } from "../../quote/base/Quote";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { AccountService } from "../account.service";

@graphql.Resolver(() => Account)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AccountResolverBase {
  constructor(
    protected readonly service: AccountService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async _accountsMeta(
    @graphql.Args() args: AccountFindManyArgs
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

  @graphql.Query(() => [Account])
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async accounts(
    @graphql.Args() args: AccountFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Account[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Account",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Account, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "own",
  })
  async account(
    @graphql.Args() args: AccountFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Account | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Account",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Account)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "create",
    possession: "any",
  })
  async createAccount(
    @graphql.Args() args: CreateAccountArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Account> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Account",
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
        `providing the properties: ${properties} on ${"Account"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Account)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "update",
    possession: "any",
  })
  async updateAccount(
    @graphql.Args() args: UpdateAccountArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Account | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Account",
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
        `providing the properties: ${properties} on ${"Account"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => Account)
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "delete",
    possession: "any",
  })
  async deleteAccount(
    @graphql.Args() args: DeleteAccountArgs
  ): Promise<Account | null> {
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

  @graphql.ResolveField(() => [Offer])
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async offers(
    @graphql.Parent() parent: Account,
    @graphql.Args() args: OfferFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Offer[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Offer",
    });
    const results = await this.service.findOffers(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [PartMessage])
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async partMessages(
    @graphql.Parent() parent: Account,
    @graphql.Args() args: PartMessageFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PartMessage[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "PartMessage",
    });
    const results = await this.service.findPartMessages(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [PartMessage])
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async partSender(
    @graphql.Parent() parent: Account,
    @graphql.Args() args: PartMessageFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PartMessage[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "PartMessage",
    });
    const results = await this.service.findPartSender(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [Quote])
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async quotes(
    @graphql.Parent() parent: Account,
    @graphql.Args() args: QuoteFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Quote[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Quote",
    });
    const results = await this.service.findQuotes(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [User])
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async users(
    @graphql.Parent() parent: Account,
    @graphql.Args() args: UserFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const results = await this.service.findUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
