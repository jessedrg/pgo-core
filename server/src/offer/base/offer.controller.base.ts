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
import { OfferService } from "../offer.service";
import { OfferCreateInput } from "./OfferCreateInput";
import { OfferWhereInput } from "./OfferWhereInput";
import { OfferWhereUniqueInput } from "./OfferWhereUniqueInput";
import { OfferFindManyArgs } from "./OfferFindManyArgs";
import { OfferUpdateInput } from "./OfferUpdateInput";
import { Offer } from "./Offer";
import { PartWhereInput } from "../../part/base/PartWhereInput";
import { Part } from "../../part/base/Part";
@swagger.ApiBasicAuth()
export class OfferControllerBase {
  constructor(
    protected readonly service: OfferService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Offer",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Offer })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: OfferCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Offer> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Offer",
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
        `providing the properties: ${properties} on ${"Offer"} creation is forbidden for roles: ${roles}`
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
      },
      select: {
        account: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        customNumber: true,
        id: true,
        publishedAt: true,
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
    resource: "Offer",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Offer] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => OfferFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Offer[]> {
    const args = plainToClass(OfferFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Offer",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        account: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        customNumber: true,
        id: true,
        publishedAt: true,
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
    resource: "Offer",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Offer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: OfferWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Offer | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Offer",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        account: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        customNumber: true,
        id: true,
        publishedAt: true,
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
    resource: "Offer",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Offer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: OfferWhereUniqueInput,
    @common.Body()
    data: OfferUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Offer | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Offer",
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
        `providing the properties: ${properties} on ${"Offer"} update is forbidden for roles: ${roles}`
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
        },
        select: {
          account: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          customNumber: true,
          id: true,
          publishedAt: true,
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
    resource: "Offer",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Offer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: OfferWhereUniqueInput
  ): Promise<Offer | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          account: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          customNumber: true,
          id: true,
          publishedAt: true,
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
  @common.Get("/:id/parts")
  @nestAccessControl.UseRoles({
    resource: "Offer",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => PartWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyParts(
    @common.Req() request: Request,
    @common.Param() params: OfferWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Part[]> {
    const query: PartWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Part",
    });
    const results = await this.service.findParts(params.id, {
      where: query,
      select: {
        account: {
          select: {
            id: true,
          },
        },

        blueprint: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        offer: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },

        originalBlueprint: {
          select: {
            id: true,
          },
        },

        originalModel: {
          select: {
            id: true,
          },
        },

        partConfiguration: {
          select: {
            id: true,
          },
        },

        partOnShape: {
          select: {
            id: true,
          },
        },

        partsCount: true,
        process: true,
        quantities: true,
        status: true,

        stepModel: {
          select: {
            id: true,
          },
        },

        stlModel: {
          select: {
            id: true,
          },
        },

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
  @common.Post("/:id/parts")
  @nestAccessControl.UseRoles({
    resource: "Offer",
    action: "update",
    possession: "any",
  })
  async createParts(
    @common.Param() params: OfferWhereUniqueInput,
    @common.Body() body: OfferWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      parts: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Offer",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Offer"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/parts")
  @nestAccessControl.UseRoles({
    resource: "Offer",
    action: "update",
    possession: "any",
  })
  async updateParts(
    @common.Param() params: OfferWhereUniqueInput,
    @common.Body() body: OfferWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      parts: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Offer",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Offer"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/parts")
  @nestAccessControl.UseRoles({
    resource: "Offer",
    action: "update",
    possession: "any",
  })
  async deleteParts(
    @common.Param() params: OfferWhereUniqueInput,
    @common.Body() body: OfferWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      parts: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Offer",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Offer"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
