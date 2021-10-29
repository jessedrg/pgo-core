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
import { CreateOrderItemArgs } from "./CreateOrderItemArgs";
import { UpdateOrderItemArgs } from "./UpdateOrderItemArgs";
import { DeleteOrderItemArgs } from "./DeleteOrderItemArgs";
import { OrderItemFindManyArgs } from "./OrderItemFindManyArgs";
import { OrderItemFindUniqueArgs } from "./OrderItemFindUniqueArgs";
import { OrderItem } from "./OrderItem";
import { Order } from "../../order/base/Order";
import { OrderItemService } from "../orderItem.service";

@graphql.Resolver(() => OrderItem)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OrderItemResolverBase {
  constructor(
    protected readonly service: OrderItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "read",
    possession: "any",
  })
  async _orderItemsMeta(
    @graphql.Args() args: OrderItemFindManyArgs
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

  @graphql.Query(() => [OrderItem])
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "read",
    possession: "any",
  })
  async orderItems(
    @graphql.Args() args: OrderItemFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<OrderItem[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "OrderItem",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => OrderItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "read",
    possession: "own",
  })
  async orderItem(
    @graphql.Args() args: OrderItemFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<OrderItem | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "OrderItem",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => OrderItem)
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "create",
    possession: "any",
  })
  async createOrderItem(
    @graphql.Args() args: CreateOrderItemArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<OrderItem> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "OrderItem",
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
        `providing the properties: ${properties} on ${"OrderItem"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        order: args.data.order
          ? {
              connect: args.data.order,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => OrderItem)
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "update",
    possession: "any",
  })
  async updateOrderItem(
    @graphql.Args() args: UpdateOrderItemArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<OrderItem | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "OrderItem",
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
        `providing the properties: ${properties} on ${"OrderItem"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

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

  @graphql.Mutation(() => OrderItem)
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "delete",
    possession: "any",
  })
  async deleteOrderItem(
    @graphql.Args() args: DeleteOrderItemArgs
  ): Promise<OrderItem | null> {
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

  @graphql.ResolveField(() => Order, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "OrderItem",
    action: "read",
    possession: "any",
  })
  async order(
    @graphql.Parent() parent: OrderItem,
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
