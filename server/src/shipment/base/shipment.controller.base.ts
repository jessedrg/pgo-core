import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ShipmentService } from "../shipment.service";
import { ShipmentCreateInput } from "./ShipmentCreateInput";
import { ShipmentWhereInput } from "./ShipmentWhereInput";
import { ShipmentWhereUniqueInput } from "./ShipmentWhereUniqueInput";
import { ShipmentFindManyArgs } from "./ShipmentFindManyArgs";
import { ShipmentUpdateInput } from "./ShipmentUpdateInput";
import { Shipment } from "./Shipment";
import { OrderWhereInput } from "../../order/base/OrderWhereInput";
import { Order } from "../../order/base/Order";
@swagger.ApiBasicAuth()
export class ShipmentControllerBase {
  constructor(
    protected readonly service: ShipmentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Shipment",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Shipment })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ShipmentCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Shipment> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Shipment",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Shipment"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: data,
      select: {
        courier: true,
        createdAt: true,
        declaredValues: true,
        delayedAt: true,
        deliveredAt: true,
        estimatedAt: true,
        id: true,
        partial: true,
        realtedId: true,
        relatedType: true,
        shippedAt: true,
        status: true,
        tracking: true,
        trackingUrl: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Shipment",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Shipment] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => ShipmentFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Shipment[]> {
    const args = plainToClass(ShipmentFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Shipment",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        courier: true,
        createdAt: true,
        declaredValues: true,
        delayedAt: true,
        deliveredAt: true,
        estimatedAt: true,
        id: true,
        partial: true,
        realtedId: true,
        relatedType: true,
        shippedAt: true,
        status: true,
        tracking: true,
        trackingUrl: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Shipment",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Shipment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ShipmentWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Shipment | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Shipment",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        courier: true,
        createdAt: true,
        declaredValues: true,
        delayedAt: true,
        deliveredAt: true,
        estimatedAt: true,
        id: true,
        partial: true,
        realtedId: true,
        relatedType: true,
        shippedAt: true,
        status: true,
        tracking: true,
        trackingUrl: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Shipment",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Shipment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ShipmentWhereUniqueInput,
    @common.Body()
    data: ShipmentUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Shipment | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Shipment",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Shipment"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          courier: true,
          createdAt: true,
          declaredValues: true,
          delayedAt: true,
          deliveredAt: true,
          estimatedAt: true,
          id: true,
          partial: true,
          realtedId: true,
          relatedType: true,
          shippedAt: true,
          status: true,
          tracking: true,
          trackingUrl: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Shipment",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Shipment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ShipmentWhereUniqueInput
  ): Promise<Shipment | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          courier: true,
          createdAt: true,
          declaredValues: true,
          delayedAt: true,
          deliveredAt: true,
          estimatedAt: true,
          id: true,
          partial: true,
          realtedId: true,
          relatedType: true,
          shippedAt: true,
          status: true,
          tracking: true,
          trackingUrl: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/orders")
  @nestAccessControl.UseRoles({
    resource: "Shipment",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => OrderWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyOrders(
    @common.Req() request: Request,
    @common.Param() params: ShipmentWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Order[]> {
    const query: OrderWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Order",
    });
    const results = await this.service.findOrders(params.id, {
      where: query,
      select: {
        billingAddress: true,
        comment: true,
        createdAt: true,
        customNo: true,
        estimatedDays: true,
        fees: true,
        id: true,

        organization: {
          select: {
            id: true,
          },
        },

        payment: {
          select: {
            id: true,
          },
        },

        shipment: {
          select: {
            id: true,
          },
        },

        shippingaddress: true,
        state: true,
        subtotal: true,
        taxes: true,
        total: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/orders")
  @nestAccessControl.UseRoles({
    resource: "Shipment",
    action: "update",
    possession: "any",
  })
  async createOrders(
    @common.Param() params: ShipmentWhereUniqueInput,
    @common.Body() body: ShipmentWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      orders: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Shipment",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Shipment"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/orders")
  @nestAccessControl.UseRoles({
    resource: "Shipment",
    action: "update",
    possession: "any",
  })
  async updateOrders(
    @common.Param() params: ShipmentWhereUniqueInput,
    @common.Body() body: ShipmentWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      orders: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Shipment",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Shipment"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/orders")
  @nestAccessControl.UseRoles({
    resource: "Shipment",
    action: "update",
    possession: "any",
  })
  async deleteOrders(
    @common.Param() params: ShipmentWhereUniqueInput,
    @common.Body() body: ShipmentWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      orders: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Shipment",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Shipment"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
