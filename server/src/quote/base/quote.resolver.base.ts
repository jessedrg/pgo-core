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
import { CreateQuoteArgs } from "./CreateQuoteArgs";
import { UpdateQuoteArgs } from "./UpdateQuoteArgs";
import { DeleteQuoteArgs } from "./DeleteQuoteArgs";
import { QuoteFindManyArgs } from "./QuoteFindManyArgs";
import { QuoteFindUniqueArgs } from "./QuoteFindUniqueArgs";
import { Quote } from "./Quote";
import { Account } from "../../account/base/Account";
import { QuoteService } from "../quote.service";

@graphql.Resolver(() => Quote)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class QuoteResolverBase {
  constructor(
    protected readonly service: QuoteService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "read",
    possession: "any",
  })
  async _quotesMeta(
    @graphql.Args() args: QuoteFindManyArgs
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

  @graphql.Query(() => [Quote])
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "read",
    possession: "any",
  })
  async quotes(
    @graphql.Args() args: QuoteFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Quote[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Quote",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Quote, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "read",
    possession: "own",
  })
  async quote(
    @graphql.Args() args: QuoteFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Quote | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Quote",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Quote)
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "create",
    possession: "any",
  })
  async createQuote(
    @graphql.Args() args: CreateQuoteArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Quote> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Quote",
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
        `providing the properties: ${properties} on ${"Quote"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        accountId: args.data.accountId
          ? {
              connect: args.data.accountId,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Quote)
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "update",
    possession: "any",
  })
  async updateQuote(
    @graphql.Args() args: UpdateQuoteArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Quote | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Quote",
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
        `providing the properties: ${properties} on ${"Quote"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          accountId: args.data.accountId
            ? {
                connect: args.data.accountId,
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

  @graphql.Mutation(() => Quote)
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "delete",
    possession: "any",
  })
  async deleteQuote(
    @graphql.Args() args: DeleteQuoteArgs
  ): Promise<Quote | null> {
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

  @graphql.ResolveField(() => Account, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "read",
    possession: "any",
  })
  async accountId(
    @graphql.Parent() parent: Quote,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Account | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Account",
    });
    const result = await this.service.getAccountId(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
