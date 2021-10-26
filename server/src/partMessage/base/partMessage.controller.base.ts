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
import { PartMessageService } from "../partMessage.service";
import { PartMessageCreateInput } from "./PartMessageCreateInput";
import { PartMessageWhereInput } from "./PartMessageWhereInput";
import { PartMessageWhereUniqueInput } from "./PartMessageWhereUniqueInput";
import { PartMessageFindManyArgs } from "./PartMessageFindManyArgs";
import { PartMessageUpdateInput } from "./PartMessageUpdateInput";
import { PartMessage } from "./PartMessage";
@swagger.ApiBearerAuth()
export class PartMessageControllerBase {
  constructor(
    protected readonly service: PartMessageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "PartMessage",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: PartMessage })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: PartMessageCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PartMessage> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "PartMessage",
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
        `providing the properties: ${properties} on ${"PartMessage"} creation is forbidden for roles: ${roles}`
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

        recieverId: data.recieverId
          ? {
              connect: data.recieverId,
            }
          : undefined,

        senderId: data.senderId
          ? {
              connect: data.senderId,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        message: true,
        messageType: true,

        partId: {
          select: {
            id: true,
          },
        },

        recieverId: {
          select: {
            id: true,
          },
        },

        senderId: {
          select: {
            id: true,
          },
        },

        type: true,
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
    resource: "PartMessage",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [PartMessage] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => PartMessageFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PartMessage[]> {
    const args = plainToClass(PartMessageFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "PartMessage",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        message: true,
        messageType: true,

        partId: {
          select: {
            id: true,
          },
        },

        recieverId: {
          select: {
            id: true,
          },
        },

        senderId: {
          select: {
            id: true,
          },
        },

        type: true,
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
    resource: "PartMessage",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: PartMessage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: PartMessageWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PartMessage | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "PartMessage",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        message: true,
        messageType: true,

        partId: {
          select: {
            id: true,
          },
        },

        recieverId: {
          select: {
            id: true,
          },
        },

        senderId: {
          select: {
            id: true,
          },
        },

        type: true,
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
    resource: "PartMessage",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: PartMessage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: PartMessageWhereUniqueInput,
    @common.Body()
    data: PartMessageUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PartMessage | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "PartMessage",
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
        `providing the properties: ${properties} on ${"PartMessage"} update is forbidden for roles: ${roles}`
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

          recieverId: data.recieverId
            ? {
                connect: data.recieverId,
              }
            : undefined,

          senderId: data.senderId
            ? {
                connect: data.senderId,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          message: true,
          messageType: true,

          partId: {
            select: {
              id: true,
            },
          },

          recieverId: {
            select: {
              id: true,
            },
          },

          senderId: {
            select: {
              id: true,
            },
          },

          type: true,
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
    resource: "PartMessage",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: PartMessage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: PartMessageWhereUniqueInput
  ): Promise<PartMessage | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          message: true,
          messageType: true,

          partId: {
            select: {
              id: true,
            },
          },

          recieverId: {
            select: {
              id: true,
            },
          },

          senderId: {
            select: {
              id: true,
            },
          },

          type: true,
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
