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
import { InviteService } from "../invite.service";
import { InviteCreateInput } from "./InviteCreateInput";
import { InviteWhereInput } from "./InviteWhereInput";
import { InviteWhereUniqueInput } from "./InviteWhereUniqueInput";
import { InviteFindManyArgs } from "./InviteFindManyArgs";
import { InviteUpdateInput } from "./InviteUpdateInput";
import { Invite } from "./Invite";
@swagger.ApiBearerAuth()
export class InviteControllerBase {
  constructor(
    protected readonly service: InviteService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Invite",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Invite })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: InviteCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Invite> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Invite",
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
        `providing the properties: ${properties} on ${"Invite"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        accountId: data.accountId
          ? {
              connect: data.accountId,
            }
          : undefined,
      },
      select: {
        accountId: {
          select: {
            id: true,
          },
        },

        active: true,
        createdAt: true,
        email: true,
        expiresAt: true,
        id: true,
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
    resource: "Invite",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Invite] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => InviteFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Invite[]> {
    const args = plainToClass(InviteFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Invite",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        accountId: {
          select: {
            id: true,
          },
        },

        active: true,
        createdAt: true,
        email: true,
        expiresAt: true,
        id: true,
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
    resource: "Invite",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Invite })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: InviteWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Invite | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Invite",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        accountId: {
          select: {
            id: true,
          },
        },

        active: true,
        createdAt: true,
        email: true,
        expiresAt: true,
        id: true,
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
    resource: "Invite",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Invite })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: InviteWhereUniqueInput,
    @common.Body()
    data: InviteUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Invite | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Invite",
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
        `providing the properties: ${properties} on ${"Invite"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          accountId: data.accountId
            ? {
                connect: data.accountId,
              }
            : undefined,
        },
        select: {
          accountId: {
            select: {
              id: true,
            },
          },

          active: true,
          createdAt: true,
          email: true,
          expiresAt: true,
          id: true,
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
    resource: "Invite",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Invite })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: InviteWhereUniqueInput
  ): Promise<Invite | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          accountId: {
            select: {
              id: true,
            },
          },

          active: true,
          createdAt: true,
          email: true,
          expiresAt: true,
          id: true,
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
