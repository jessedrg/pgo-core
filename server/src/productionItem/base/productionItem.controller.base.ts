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
import { ProductionItemService } from "../productionItem.service";
import { ProductionItemCreateInput } from "./ProductionItemCreateInput";
import { ProductionItemWhereInput } from "./ProductionItemWhereInput";
import { ProductionItemWhereUniqueInput } from "./ProductionItemWhereUniqueInput";
import { ProductionItemFindManyArgs } from "./ProductionItemFindManyArgs";
import { ProductionItemUpdateInput } from "./ProductionItemUpdateInput";
import { ProductionItem } from "./ProductionItem";
@swagger.ApiBasicAuth()
export class ProductionItemControllerBase {
  constructor(
    protected readonly service: ProductionItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "ProductionItem",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: ProductionItem })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ProductionItemCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ProductionItem> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "ProductionItem",
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
        `providing the properties: ${properties} on ${"ProductionItem"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        partId: data.partId
          ? {
              connect: data.partId,
            }
          : undefined,

        productionId: data.productionId
          ? {
              connect: data.productionId,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        partId: {
          select: {
            id: true,
          },
        },

        productionId: {
          select: {
            id: true,
          },
        },

        quantity: true,
        shippedQuantity: true,
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
    resource: "ProductionItem",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [ProductionItem] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => ProductionItemFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ProductionItem[]> {
    const args = plainToClass(ProductionItemFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ProductionItem",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,

        partId: {
          select: {
            id: true,
          },
        },

        productionId: {
          select: {
            id: true,
          },
        },

        quantity: true,
        shippedQuantity: true,
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
    resource: "ProductionItem",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: ProductionItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ProductionItemWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ProductionItem | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "ProductionItem",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,

        partId: {
          select: {
            id: true,
          },
        },

        productionId: {
          select: {
            id: true,
          },
        },

        quantity: true,
        shippedQuantity: true,
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
    resource: "ProductionItem",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: ProductionItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ProductionItemWhereUniqueInput,
    @common.Body()
    data: ProductionItemUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ProductionItem | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ProductionItem",
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
        `providing the properties: ${properties} on ${"ProductionItem"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          partId: data.partId
            ? {
                connect: data.partId,
              }
            : undefined,

          productionId: data.productionId
            ? {
                connect: data.productionId,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          partId: {
            select: {
              id: true,
            },
          },

          productionId: {
            select: {
              id: true,
            },
          },

          quantity: true,
          shippedQuantity: true,
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
    resource: "ProductionItem",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: ProductionItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ProductionItemWhereUniqueInput
  ): Promise<ProductionItem | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,

          partId: {
            select: {
              id: true,
            },
          },

          productionId: {
            select: {
              id: true,
            },
          },

          quantity: true,
          shippedQuantity: true,
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
}
