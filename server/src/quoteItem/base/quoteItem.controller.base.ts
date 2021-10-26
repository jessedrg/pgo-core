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
import { QuoteItemService } from "../quoteItem.service";
import { QuoteItemCreateInput } from "./QuoteItemCreateInput";
import { QuoteItemWhereInput } from "./QuoteItemWhereInput";
import { QuoteItemWhereUniqueInput } from "./QuoteItemWhereUniqueInput";
import { QuoteItemFindManyArgs } from "./QuoteItemFindManyArgs";
import { QuoteItemUpdateInput } from "./QuoteItemUpdateInput";
import { QuoteItem } from "./QuoteItem";
@swagger.ApiBearerAuth()
export class QuoteItemControllerBase {
  constructor(
    protected readonly service: QuoteItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "QuoteItem",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: QuoteItem })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: QuoteItemCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<QuoteItem> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "QuoteItem",
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
        `providing the properties: ${properties} on ${"QuoteItem"} creation is forbidden for roles: ${roles}`
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
      },
      select: {
        basePrices: true,
        constructionType: true,
        createdAt: true,
        id: true,
        margins: true,

        partId: {
          select: {
            id: true,
          },
        },

        prices: true,
        productionDays: true,
        quantities: true,
        status: true,
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
    resource: "QuoteItem",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [QuoteItem] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => QuoteItemFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<QuoteItem[]> {
    const args = plainToClass(QuoteItemFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "QuoteItem",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        basePrices: true,
        constructionType: true,
        createdAt: true,
        id: true,
        margins: true,

        partId: {
          select: {
            id: true,
          },
        },

        prices: true,
        productionDays: true,
        quantities: true,
        status: true,
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
    resource: "QuoteItem",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: QuoteItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: QuoteItemWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<QuoteItem | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "QuoteItem",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        basePrices: true,
        constructionType: true,
        createdAt: true,
        id: true,
        margins: true,

        partId: {
          select: {
            id: true,
          },
        },

        prices: true,
        productionDays: true,
        quantities: true,
        status: true,
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
    resource: "QuoteItem",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: QuoteItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: QuoteItemWhereUniqueInput,
    @common.Body()
    data: QuoteItemUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<QuoteItem | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "QuoteItem",
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
        `providing the properties: ${properties} on ${"QuoteItem"} update is forbidden for roles: ${roles}`
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
        },
        select: {
          basePrices: true,
          constructionType: true,
          createdAt: true,
          id: true,
          margins: true,

          partId: {
            select: {
              id: true,
            },
          },

          prices: true,
          productionDays: true,
          quantities: true,
          status: true,
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
    resource: "QuoteItem",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: QuoteItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: QuoteItemWhereUniqueInput
  ): Promise<QuoteItem | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          basePrices: true,
          constructionType: true,
          createdAt: true,
          id: true,
          margins: true,

          partId: {
            select: {
              id: true,
            },
          },

          prices: true,
          productionDays: true,
          quantities: true,
          status: true,
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
