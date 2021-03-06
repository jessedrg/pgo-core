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
import { QuoteService } from "../quote.service";
import { QuoteCreateInput } from "./QuoteCreateInput";
import { QuoteWhereInput } from "./QuoteWhereInput";
import { QuoteWhereUniqueInput } from "./QuoteWhereUniqueInput";
import { QuoteFindManyArgs } from "./QuoteFindManyArgs";
import { QuoteUpdateInput } from "./QuoteUpdateInput";
import { Quote } from "./Quote";
import { QuoteItemWhereInput } from "../../quoteItem/base/QuoteItemWhereInput";
import { QuoteItem } from "../../quoteItem/base/QuoteItem";
@swagger.ApiBasicAuth()
export class QuoteControllerBase {
  constructor(
    protected readonly service: QuoteService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Quote })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: QuoteCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Quote> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Quote",
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
        `providing the properties: ${properties} on ${"Quote"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        account: data.account
          ? {
              connect: data.account,
            }
          : undefined,

        provider: data.provider
          ? {
              connect: data.provider,
            }
          : undefined,
      },
      select: {
        account: {
          select: {
            id: true,
          },
        },

        completedAt: true,
        createdAt: true,
        id: true,

        provider: {
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
    resource: "Quote",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Quote] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => QuoteFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Quote[]> {
    const args = plainToClass(QuoteFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Quote",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        account: {
          select: {
            id: true,
          },
        },

        completedAt: true,
        createdAt: true,
        id: true,

        provider: {
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
    resource: "Quote",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Quote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: QuoteWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Quote | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Quote",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        account: {
          select: {
            id: true,
          },
        },

        completedAt: true,
        createdAt: true,
        id: true,

        provider: {
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
    resource: "Quote",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Quote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: QuoteWhereUniqueInput,
    @common.Body()
    data: QuoteUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Quote | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Quote",
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
        `providing the properties: ${properties} on ${"Quote"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          account: data.account
            ? {
                connect: data.account,
              }
            : undefined,

          provider: data.provider
            ? {
                connect: data.provider,
              }
            : undefined,
        },
        select: {
          account: {
            select: {
              id: true,
            },
          },

          completedAt: true,
          createdAt: true,
          id: true,

          provider: {
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
    resource: "Quote",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Quote })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: QuoteWhereUniqueInput
  ): Promise<Quote | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          account: {
            select: {
              id: true,
            },
          },

          completedAt: true,
          createdAt: true,
          id: true,

          provider: {
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
  @common.Get("/:id/quoteItems")
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => QuoteItemWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyQuoteItems(
    @common.Req() request: Request,
    @common.Param() params: QuoteWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<QuoteItem[]> {
    const query: QuoteItemWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "QuoteItem",
    });
    const results = await this.service.findQuoteItems(params.id, {
      where: query,
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
  @common.Post("/:id/quoteItems")
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "update",
    possession: "any",
  })
  async createQuoteItems(
    @common.Param() params: QuoteWhereUniqueInput,
    @common.Body() body: QuoteWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      quoteItems: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Quote",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Quote"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/quoteItems")
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "update",
    possession: "any",
  })
  async updateQuoteItems(
    @common.Param() params: QuoteWhereUniqueInput,
    @common.Body() body: QuoteWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      quoteItems: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Quote",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Quote"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/quoteItems")
  @nestAccessControl.UseRoles({
    resource: "Quote",
    action: "update",
    possession: "any",
  })
  async deleteQuoteItems(
    @common.Param() params: QuoteWhereUniqueInput,
    @common.Body() body: QuoteWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      quoteItems: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Quote",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Quote"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
