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
import { CreateProductionItemArgs } from "./CreateProductionItemArgs";
import { UpdateProductionItemArgs } from "./UpdateProductionItemArgs";
import { DeleteProductionItemArgs } from "./DeleteProductionItemArgs";
import { ProductionItemFindManyArgs } from "./ProductionItemFindManyArgs";
import { ProductionItemFindUniqueArgs } from "./ProductionItemFindUniqueArgs";
import { ProductionItem } from "./ProductionItem";
import { ProductionItemService } from "../productionItem.service";

@graphql.Resolver(() => ProductionItem)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProductionItemResolverBase {
  constructor(
    protected readonly service: ProductionItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ProductionItem",
    action: "read",
    possession: "any",
  })
  async _productionItemsMeta(
    @graphql.Args() args: ProductionItemFindManyArgs
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

  @graphql.Query(() => [ProductionItem])
  @nestAccessControl.UseRoles({
    resource: "ProductionItem",
    action: "read",
    possession: "any",
  })
  async productionItems(
    @graphql.Args() args: ProductionItemFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ProductionItem[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ProductionItem",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => ProductionItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ProductionItem",
    action: "read",
    possession: "own",
  })
  async productionItem(
    @graphql.Args() args: ProductionItemFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ProductionItem | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "ProductionItem",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => ProductionItem)
  @nestAccessControl.UseRoles({
    resource: "ProductionItem",
    action: "create",
    possession: "any",
  })
  async createProductionItem(
    @graphql.Args() args: CreateProductionItemArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ProductionItem> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "ProductionItem",
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
        `providing the properties: ${properties} on ${"ProductionItem"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ProductionItem)
  @nestAccessControl.UseRoles({
    resource: "ProductionItem",
    action: "update",
    possession: "any",
  })
  async updateProductionItem(
    @graphql.Args() args: UpdateProductionItemArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ProductionItem | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ProductionItem",
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
        `providing the properties: ${properties} on ${"ProductionItem"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => ProductionItem)
  @nestAccessControl.UseRoles({
    resource: "ProductionItem",
    action: "delete",
    possession: "any",
  })
  async deleteProductionItem(
    @graphql.Args() args: DeleteProductionItemArgs
  ): Promise<ProductionItem | null> {
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
