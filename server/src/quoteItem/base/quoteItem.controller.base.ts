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
import { PriceWhereInput } from "../../price/base/PriceWhereInput";
import { Price } from "../../price/base/Price";
@swagger.ApiBasicAuth()
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

        part: data.part
          ? {
              connect: data.part,
            }
          : undefined,

        provider: data.provider
          ? {
              connect: data.provider,
            }
          : undefined,

        quote: data.quote
          ? {
              connect: data.quote,
            }
          : undefined,
      },
      select: {
        constructionType: true,
        createdAt: true,
        id: true,
        margins: true,

        part: {
          select: {
            id: true,
          },
        },

        productionDays: true,

        provider: {
          select: {
            id: true,
          },
        },

        quantities: true,

        quote: {
          select: {
            id: true,
          },
        },

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
        constructionType: true,
        createdAt: true,
        id: true,
        margins: true,

        part: {
          select: {
            id: true,
          },
        },

        productionDays: true,

        provider: {
          select: {
            id: true,
          },
        },

        quantities: true,

        quote: {
          select: {
            id: true,
          },
        },

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
        constructionType: true,
        createdAt: true,
        id: true,
        margins: true,

        part: {
          select: {
            id: true,
          },
        },

        productionDays: true,

        provider: {
          select: {
            id: true,
          },
        },

        quantities: true,

        quote: {
          select: {
            id: true,
          },
        },

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

          part: data.part
            ? {
                connect: data.part,
              }
            : undefined,

          provider: data.provider
            ? {
                connect: data.provider,
              }
            : undefined,

          quote: data.quote
            ? {
                connect: data.quote,
              }
            : undefined,
        },
        select: {
          constructionType: true,
          createdAt: true,
          id: true,
          margins: true,

          part: {
            select: {
              id: true,
            },
          },

          productionDays: true,

          provider: {
            select: {
              id: true,
            },
          },

          quantities: true,

          quote: {
            select: {
              id: true,
            },
          },

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
          constructionType: true,
          createdAt: true,
          id: true,
          margins: true,

          part: {
            select: {
              id: true,
            },
          },

          productionDays: true,

          provider: {
            select: {
              id: true,
            },
          },

          quantities: true,

          quote: {
            select: {
              id: true,
            },
          },

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
  @common.Get("/:id/basePrices")
  @nestAccessControl.UseRoles({
    resource: "QuoteItem",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => PriceWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyBasePrices(
    @common.Req() request: Request,
    @common.Param() params: QuoteItemWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Price[]> {
    const query: PriceWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Price",
    });
    const results = await this.service.findBasePrices(params.id, {
      where: query,
      select: {
        amount: true,
        createdAt: true,
        currency: true,
        id: true,
        quantity: true,
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
  @common.Post("/:id/basePrices")
  @nestAccessControl.UseRoles({
    resource: "QuoteItem",
    action: "update",
    possession: "any",
  })
  async createBasePrices(
    @common.Param() params: QuoteItemWhereUniqueInput,
    @common.Body() body: QuoteItemWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      basePrices: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "QuoteItem",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"QuoteItem"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/basePrices")
  @nestAccessControl.UseRoles({
    resource: "QuoteItem",
    action: "update",
    possession: "any",
  })
  async updateBasePrices(
    @common.Param() params: QuoteItemWhereUniqueInput,
    @common.Body() body: QuoteItemWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      basePrices: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "QuoteItem",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"QuoteItem"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/basePrices")
  @nestAccessControl.UseRoles({
    resource: "QuoteItem",
    action: "update",
    possession: "any",
  })
  async deleteBasePrices(
    @common.Param() params: QuoteItemWhereUniqueInput,
    @common.Body() body: QuoteItemWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      basePrices: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "QuoteItem",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"QuoteItem"} is forbidden for roles: ${roles}`
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
  @common.Get("/:id/prices")
  @nestAccessControl.UseRoles({
    resource: "QuoteItem",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => PriceWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyPrices(
    @common.Req() request: Request,
    @common.Param() params: QuoteItemWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Price[]> {
    const query: PriceWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Price",
    });
    const results = await this.service.findPrices(params.id, {
      where: query,
      select: {
        amount: true,
        createdAt: true,
        currency: true,
        id: true,
        quantity: true,
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
  @common.Post("/:id/prices")
  @nestAccessControl.UseRoles({
    resource: "QuoteItem",
    action: "update",
    possession: "any",
  })
  async createPrices(
    @common.Param() params: QuoteItemWhereUniqueInput,
    @common.Body() body: QuoteItemWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      prices: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "QuoteItem",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"QuoteItem"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/prices")
  @nestAccessControl.UseRoles({
    resource: "QuoteItem",
    action: "update",
    possession: "any",
  })
  async updatePrices(
    @common.Param() params: QuoteItemWhereUniqueInput,
    @common.Body() body: QuoteItemWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      prices: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "QuoteItem",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"QuoteItem"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/prices")
  @nestAccessControl.UseRoles({
    resource: "QuoteItem",
    action: "update",
    possession: "any",
  })
  async deletePrices(
    @common.Param() params: QuoteItemWhereUniqueInput,
    @common.Body() body: QuoteItemWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      prices: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "QuoteItem",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"QuoteItem"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
