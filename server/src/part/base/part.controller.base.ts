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
import { PartService } from "../part.service";
import { PartCreateInput } from "./PartCreateInput";
import { PartWhereInput } from "./PartWhereInput";
import { PartWhereUniqueInput } from "./PartWhereUniqueInput";
import { PartFindManyArgs } from "./PartFindManyArgs";
import { PartUpdateInput } from "./PartUpdateInput";
import { Part } from "./Part";
import { PartConfigurationWhereInput } from "../../partConfiguration/base/PartConfigurationWhereInput";
import { PartConfiguration } from "../../partConfiguration/base/PartConfiguration";
import { ProductionItemWhereInput } from "../../productionItem/base/ProductionItemWhereInput";
import { ProductionItem } from "../../productionItem/base/ProductionItem";
import { PartOnShapeWhereInput } from "../../partOnShape/base/PartOnShapeWhereInput";
import { PartOnShape } from "../../partOnShape/base/PartOnShape";
import { QuoteItemWhereInput } from "../../quoteItem/base/QuoteItemWhereInput";
import { QuoteItem } from "../../quoteItem/base/QuoteItem";
@swagger.ApiBearerAuth()
export class PartControllerBase {
  constructor(
    protected readonly service: PartService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Part })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: PartCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Part> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Part",
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
        `providing the properties: ${properties} on ${"Part"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        parts: true,
        process: true,
        quantities: true,
        status: true,
        surface: true,
        updatedAt: true,
        visible: true,
        volume: true,
        volumeBoundingBox: true,
        volumeChips: true,
        x: true,
        y: true,
        z: true,
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
    resource: "Part",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Part] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => PartFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Part[]> {
    const args = plainToClass(PartFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Part",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        parts: true,
        process: true,
        quantities: true,
        status: true,
        surface: true,
        updatedAt: true,
        visible: true,
        volume: true,
        volumeBoundingBox: true,
        volumeChips: true,
        x: true,
        y: true,
        z: true,
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
    resource: "Part",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Part })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: PartWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Part | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Part",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        parts: true,
        process: true,
        quantities: true,
        status: true,
        surface: true,
        updatedAt: true,
        visible: true,
        volume: true,
        volumeBoundingBox: true,
        volumeChips: true,
        x: true,
        y: true,
        z: true,
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
    resource: "Part",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Part })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: PartWhereUniqueInput,
    @common.Body()
    data: PartUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Part | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
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
        `providing the properties: ${properties} on ${"Part"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          parts: true,
          process: true,
          quantities: true,
          status: true,
          surface: true,
          updatedAt: true,
          visible: true,
          volume: true,
          volumeBoundingBox: true,
          volumeChips: true,
          x: true,
          y: true,
          z: true,
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
    resource: "Part",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Part })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: PartWhereUniqueInput
  ): Promise<Part | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          parts: true,
          process: true,
          quantities: true,
          status: true,
          surface: true,
          updatedAt: true,
          visible: true,
          volume: true,
          volumeBoundingBox: true,
          volumeChips: true,
          x: true,
          y: true,
          z: true,
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
  @common.Get("/:id/part")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => PartConfigurationWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyPart(
    @common.Req() request: Request,
    @common.Param() params: PartWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PartConfiguration[]> {
    const query: PartConfigurationWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "PartConfiguration",
    });
    const results = await this.service.findPart(params.id, {
      where: query,
      select: {
        colorFinish: true,
        createdAt: true,
        finish: true,
        hardness: true,
        id: true,
        material: true,
        materialType: true,

        partId: {
          select: {
            id: true,
          },
        },

        tech: true,
        tolerance: true,
        updatedAt: true,
        weight: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/part")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "update",
    possession: "any",
  })
  async createPart(
    @common.Param() params: PartWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      part: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Part"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/part")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "update",
    possession: "any",
  })
  async updatePart(
    @common.Param() params: PartWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      part: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Part"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/part")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "update",
    possession: "any",
  })
  async deletePart(
    @common.Param() params: PartWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      part: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Part"} is forbidden for roles: ${roles}`
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
  @common.Get("/:id/partInProduction")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => ProductionItemWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyPartInProduction(
    @common.Req() request: Request,
    @common.Param() params: PartWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ProductionItem[]> {
    const query: ProductionItemWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ProductionItem",
    });
    const results = await this.service.findPartInProduction(params.id, {
      where: query,
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
  @common.Post("/:id/partInProduction")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "update",
    possession: "any",
  })
  async createPartInProduction(
    @common.Param() params: PartWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      partInProduction: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Part"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/partInProduction")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "update",
    possession: "any",
  })
  async updatePartInProduction(
    @common.Param() params: PartWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      partInProduction: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Part"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/partInProduction")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "update",
    possession: "any",
  })
  async deletePartInProduction(
    @common.Param() params: PartWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      partInProduction: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Part"} is forbidden for roles: ${roles}`
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
  @common.Get("/:id/partOnShape")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => PartOnShapeWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyPartOnShape(
    @common.Req() request: Request,
    @common.Param() params: PartWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PartOnShape[]> {
    const query: PartOnShapeWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "PartOnShape",
    });
    const results = await this.service.findPartOnShape(params.id, {
      where: query,
      select: {
        createdAt: true,
        did: true,
        eid: true,
        id: true,

        partId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        wid: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/partOnShape")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "update",
    possession: "any",
  })
  async createPartOnShape(
    @common.Param() params: PartWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      partOnShape: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Part"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/partOnShape")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "update",
    possession: "any",
  })
  async updatePartOnShape(
    @common.Param() params: PartWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      partOnShape: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Part"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/partOnShape")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "update",
    possession: "any",
  })
  async deletePartOnShape(
    @common.Param() params: PartWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      partOnShape: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Part"} is forbidden for roles: ${roles}`
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
  @common.Get("/:id/quoteItem")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => QuoteItemWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyQuoteItem(
    @common.Req() request: Request,
    @common.Param() params: PartWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<QuoteItem[]> {
    const query: QuoteItemWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "QuoteItem",
    });
    const results = await this.service.findQuoteItem(params.id, {
      where: query,
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
  @common.Post("/:id/quoteItem")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "update",
    possession: "any",
  })
  async createQuoteItem(
    @common.Param() params: PartWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      quoteItem: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Part"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/quoteItem")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "update",
    possession: "any",
  })
  async updateQuoteItem(
    @common.Param() params: PartWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      quoteItem: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Part"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/quoteItem")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "update",
    possession: "any",
  })
  async deleteQuoteItem(
    @common.Param() params: PartWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      quoteItem: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Part"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
