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
import { CreateProductionArgs } from "./CreateProductionArgs";
import { UpdateProductionArgs } from "./UpdateProductionArgs";
import { DeleteProductionArgs } from "./DeleteProductionArgs";
import { ProductionFindManyArgs } from "./ProductionFindManyArgs";
import { ProductionFindUniqueArgs } from "./ProductionFindUniqueArgs";
import { Production } from "./Production";
import { ProductionItemFindManyArgs } from "../../productionItem/base/ProductionItemFindManyArgs";
import { ProductionItem } from "../../productionItem/base/ProductionItem";
import { ShipmentFindManyArgs } from "../../shipment/base/ShipmentFindManyArgs";
import { Shipment } from "../../shipment/base/Shipment";
import { Account } from "../../account/base/Account";
import { Order } from "../../order/base/Order";
import { ProductionService } from "../production.service";

@graphql.Resolver(() => Production)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProductionResolverBase {
  constructor(
    protected readonly service: ProductionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Production",
    action: "read",
    possession: "any",
  })
  async _productionsMeta(
    @graphql.Args() args: ProductionFindManyArgs
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

  @graphql.Query(() => [Production])
  @nestAccessControl.UseRoles({
    resource: "Production",
    action: "read",
    possession: "any",
  })
  async productions(
    @graphql.Args() args: ProductionFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Production[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Production",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Production, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Production",
    action: "read",
    possession: "own",
  })
  async production(
    @graphql.Args() args: ProductionFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Production | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Production",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Production)
  @nestAccessControl.UseRoles({
    resource: "Production",
    action: "create",
    possession: "any",
  })
  async createProduction(
    @graphql.Args() args: CreateProductionArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Production> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Production",
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
        `providing the properties: ${properties} on ${"Production"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        account: args.data.account
          ? {
              connect: args.data.account,
            }
          : undefined,

        order: args.data.order
          ? {
              connect: args.data.order,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Production)
  @nestAccessControl.UseRoles({
    resource: "Production",
    action: "update",
    possession: "any",
  })
  async updateProduction(
    @graphql.Args() args: UpdateProductionArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Production | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Production",
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
        `providing the properties: ${properties} on ${"Production"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          account: args.data.account
            ? {
                connect: args.data.account,
              }
            : undefined,

          order: args.data.order
            ? {
                connect: args.data.order,
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

  @graphql.Mutation(() => Production)
  @nestAccessControl.UseRoles({
    resource: "Production",
    action: "delete",
    possession: "any",
  })
  async deleteProduction(
    @graphql.Args() args: DeleteProductionArgs
  ): Promise<Production | null> {
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

  @graphql.ResolveField(() => [ProductionItem])
  @nestAccessControl.UseRoles({
    resource: "Production",
    action: "read",
    possession: "any",
  })
  async productionItems(
    @graphql.Parent() parent: Production,
    @graphql.Args() args: ProductionItemFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ProductionItem[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ProductionItem",
    });
    const results = await this.service.findProductionItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [Shipment])
  @nestAccessControl.UseRoles({
    resource: "Production",
    action: "read",
    possession: "any",
  })
  async shipments(
    @graphql.Parent() parent: Production,
    @graphql.Args() args: ShipmentFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Shipment[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Shipment",
    });
    const results = await this.service.findShipments(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => Account, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Production",
    action: "read",
    possession: "any",
  })
  async account(
    @graphql.Parent() parent: Production,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Account | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Account",
    });
    const result = await this.service.getAccount(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => Order, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Production",
    action: "read",
    possession: "any",
  })
  async order(
    @graphql.Parent() parent: Production,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Order | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Order",
    });
    const result = await this.service.getOrder(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
