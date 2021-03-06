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
import { CreateQuoteItemArgs } from "./CreateQuoteItemArgs";
import { UpdateQuoteItemArgs } from "./UpdateQuoteItemArgs";
import { DeleteQuoteItemArgs } from "./DeleteQuoteItemArgs";
import { QuoteItemFindManyArgs } from "./QuoteItemFindManyArgs";
import { QuoteItemFindUniqueArgs } from "./QuoteItemFindUniqueArgs";
import { QuoteItem } from "./QuoteItem";
import { PriceFindManyArgs } from "../../price/base/PriceFindManyArgs";
import { Price } from "../../price/base/Price";
import { Part } from "../../part/base/Part";
import { Provider } from "../../provider/base/Provider";
import { Quote } from "../../quote/base/Quote";
import { QuoteItemService } from "../quoteItem.service";

@graphql.Resolver(() => QuoteItem)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class QuoteItemResolverBase {
  constructor(
    protected readonly service: QuoteItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "QuoteItem",
    action: "read",
    possession: "any",
  })
  async _quoteItemsMeta(
    @graphql.Args() args: QuoteItemFindManyArgs
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

  @graphql.Query(() => [QuoteItem])
  @nestAccessControl.UseRoles({
    resource: "QuoteItem",
    action: "read",
    possession: "any",
  })
  async quoteItems(
    @graphql.Args() args: QuoteItemFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<QuoteItem[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "QuoteItem",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => QuoteItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "QuoteItem",
    action: "read",
    possession: "own",
  })
  async quoteItem(
    @graphql.Args() args: QuoteItemFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<QuoteItem | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "QuoteItem",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => QuoteItem)
  @nestAccessControl.UseRoles({
    resource: "QuoteItem",
    action: "create",
    possession: "any",
  })
  async createQuoteItem(
    @graphql.Args() args: CreateQuoteItemArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<QuoteItem> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "QuoteItem",
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
        `providing the properties: ${properties} on ${"QuoteItem"} creation is forbidden for roles: ${roles}`
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

        provider: args.data.provider
          ? {
              connect: args.data.provider,
            }
          : undefined,

        quote: args.data.quote
          ? {
              connect: args.data.quote,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => QuoteItem)
  @nestAccessControl.UseRoles({
    resource: "QuoteItem",
    action: "update",
    possession: "any",
  })
  async updateQuoteItem(
    @graphql.Args() args: UpdateQuoteItemArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<QuoteItem | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "QuoteItem",
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
        `providing the properties: ${properties} on ${"QuoteItem"} update is forbidden for roles: ${roles}`
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

          provider: args.data.provider
            ? {
                connect: args.data.provider,
              }
            : undefined,

          quote: args.data.quote
            ? {
                connect: args.data.quote,
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

  @graphql.Mutation(() => QuoteItem)
  @nestAccessControl.UseRoles({
    resource: "QuoteItem",
    action: "delete",
    possession: "any",
  })
  async deleteQuoteItem(
    @graphql.Args() args: DeleteQuoteItemArgs
  ): Promise<QuoteItem | null> {
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

  @graphql.ResolveField(() => [Price])
  @nestAccessControl.UseRoles({
    resource: "QuoteItem",
    action: "read",
    possession: "any",
  })
  async basePrices(
    @graphql.Parent() parent: QuoteItem,
    @graphql.Args() args: PriceFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Price[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Price",
    });
    const results = await this.service.findBasePrices(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [Price])
  @nestAccessControl.UseRoles({
    resource: "QuoteItem",
    action: "read",
    possession: "any",
  })
  async prices(
    @graphql.Parent() parent: QuoteItem,
    @graphql.Args() args: PriceFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Price[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Price",
    });
    const results = await this.service.findPrices(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => Part, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "QuoteItem",
    action: "read",
    possession: "any",
  })
  async part(
    @graphql.Parent() parent: QuoteItem,
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

  @graphql.ResolveField(() => Provider, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "QuoteItem",
    action: "read",
    possession: "any",
  })
  async provider(
    @graphql.Parent() parent: QuoteItem,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Provider | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Provider",
    });
    const result = await this.service.getProvider(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => Quote, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "QuoteItem",
    action: "read",
    possession: "any",
  })
  async quote(
    @graphql.Parent() parent: QuoteItem,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Quote | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Quote",
    });
    const result = await this.service.getQuote(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
