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
import { PartConfigurationService } from "../partConfiguration.service";
import { PartConfigurationCreateInput } from "./PartConfigurationCreateInput";
import { PartConfigurationWhereInput } from "./PartConfigurationWhereInput";
import { PartConfigurationWhereUniqueInput } from "./PartConfigurationWhereUniqueInput";
import { PartConfigurationFindManyArgs } from "./PartConfigurationFindManyArgs";
import { PartConfigurationUpdateInput } from "./PartConfigurationUpdateInput";
import { PartConfiguration } from "./PartConfiguration";
@swagger.ApiBearerAuth()
export class PartConfigurationControllerBase {
  constructor(
    protected readonly service: PartConfigurationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "PartConfiguration",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: PartConfiguration })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: PartConfigurationCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PartConfiguration> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "PartConfiguration",
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
        `providing the properties: ${properties} on ${"PartConfiguration"} creation is forbidden for roles: ${roles}`
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
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "PartConfiguration",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [PartConfiguration] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => PartConfigurationFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PartConfiguration[]> {
    const args = plainToClass(PartConfigurationFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "PartConfiguration",
    });
    const results = await this.service.findMany({
      ...args,
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
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "PartConfiguration",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: PartConfiguration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: PartConfigurationWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PartConfiguration | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "PartConfiguration",
    });
    const result = await this.service.findOne({
      where: params,
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
    resource: "PartConfiguration",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: PartConfiguration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: PartConfigurationWhereUniqueInput,
    @common.Body()
    data: PartConfigurationUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PartConfiguration | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "PartConfiguration",
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
        `providing the properties: ${properties} on ${"PartConfiguration"} update is forbidden for roles: ${roles}`
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
    resource: "PartConfiguration",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: PartConfiguration })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: PartConfigurationWhereUniqueInput
  ): Promise<PartConfiguration | null> {
    try {
      return await this.service.delete({
        where: params,
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
