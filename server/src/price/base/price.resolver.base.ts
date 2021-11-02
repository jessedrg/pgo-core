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
import { CreatePriceArgs } from "./CreatePriceArgs";
import { UpdatePriceArgs } from "./UpdatePriceArgs";
import { DeletePriceArgs } from "./DeletePriceArgs";
import { PriceFindManyArgs } from "./PriceFindManyArgs";
import { PriceFindUniqueArgs } from "./PriceFindUniqueArgs";
import { Price } from "./Price";
import { QuoteItemFindManyArgs } from "../../quoteItem/base/QuoteItemFindManyArgs";
import { QuoteItem } from "../../quoteItem/base/QuoteItem";
import { PriceService } from "../price.service";

@graphql.Resolver(() => Price)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PriceResolverBase {
  constructor(
    protected readonly service: PriceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Price",
    action: "read",
    possession: "any",
  })
  async _pricesMeta(
    @graphql.Args() args: PriceFindManyArgs
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

  @graphql.Query(() => [Price])
  @nestAccessControl.UseRoles({
    resource: "Price",
    action: "read",
    possession: "any",
  })
  async prices(
    @graphql.Args() args: PriceFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Price[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Price",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Price, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Price",
    action: "read",
    possession: "own",
  })
  async price(
    @graphql.Args() args: PriceFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Price | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Price",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Price)
  @nestAccessControl.UseRoles({
    resource: "Price",
    action: "create",
    possession: "any",
  })
  async createPrice(
    @graphql.Args() args: CreatePriceArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Price> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Price",
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
        `providing the properties: ${properties} on ${"Price"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Price)
  @nestAccessControl.UseRoles({
    resource: "Price",
    action: "update",
    possession: "any",
  })
  async updatePrice(
    @graphql.Args() args: UpdatePriceArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Price | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Price",
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
        `providing the properties: ${properties} on ${"Price"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => Price)
  @nestAccessControl.UseRoles({
    resource: "Price",
    action: "delete",
    possession: "any",
  })
  async deletePrice(
    @graphql.Args() args: DeletePriceArgs
  ): Promise<Price | null> {
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

  @graphql.ResolveField(() => [QuoteItem])
  @nestAccessControl.UseRoles({
    resource: "Price",
    action: "read",
    possession: "any",
  })
  async quoteItemBasePrices(
    @graphql.Parent() parent: Price,
    @graphql.Args() args: QuoteItemFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<QuoteItem[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "QuoteItem",
    });
    const results = await this.service.findQuoteItemBasePrices(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [QuoteItem])
  @nestAccessControl.UseRoles({
    resource: "Price",
    action: "read",
    possession: "any",
  })
  async quoteItemPrices(
    @graphql.Parent() parent: Price,
    @graphql.Args() args: QuoteItemFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<QuoteItem[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "QuoteItem",
    });
    const results = await this.service.findQuoteItemPrices(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
