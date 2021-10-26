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
import { SessionService } from "../session.service";
import { SessionCreateInput } from "./SessionCreateInput";
import { SessionWhereInput } from "./SessionWhereInput";
import { SessionWhereUniqueInput } from "./SessionWhereUniqueInput";
import { SessionFindManyArgs } from "./SessionFindManyArgs";
import { SessionUpdateInput } from "./SessionUpdateInput";
import { Session } from "./Session";
@swagger.ApiBearerAuth()
export class SessionControllerBase {
  constructor(
    protected readonly service: SessionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Session",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Session })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: SessionCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Session> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Session",
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
        `providing the properties: ${properties} on ${"Session"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        userId: data.userId
          ? {
              connect: data.userId,
            }
          : undefined,
      },
      select: {
        authMethod: true,
        createdAt: true,
        id: true,
        sessionToken: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },
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
    resource: "Session",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Session] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => SessionFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Session[]> {
    const args = plainToClass(SessionFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Session",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        authMethod: true,
        createdAt: true,
        id: true,
        sessionToken: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },
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
    resource: "Session",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Session })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: SessionWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Session | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Session",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        authMethod: true,
        createdAt: true,
        id: true,
        sessionToken: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },
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
    resource: "Session",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Session })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: SessionWhereUniqueInput,
    @common.Body()
    data: SessionUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Session | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Session",
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
        `providing the properties: ${properties} on ${"Session"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          userId: data.userId
            ? {
                connect: data.userId,
              }
            : undefined,
        },
        select: {
          authMethod: true,
          createdAt: true,
          id: true,
          sessionToken: true,
          updatedAt: true,

          userId: {
            select: {
              id: true,
            },
          },
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
    resource: "Session",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Session })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: SessionWhereUniqueInput
  ): Promise<Session | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          authMethod: true,
          createdAt: true,
          id: true,
          sessionToken: true,
          updatedAt: true,

          userId: {
            select: {
              id: true,
            },
          },
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
