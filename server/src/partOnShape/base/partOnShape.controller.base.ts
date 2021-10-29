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
import { PartOnShapeService } from "../partOnShape.service";
import { PartOnShapeCreateInput } from "./PartOnShapeCreateInput";
import { PartOnShapeWhereInput } from "./PartOnShapeWhereInput";
import { PartOnShapeWhereUniqueInput } from "./PartOnShapeWhereUniqueInput";
import { PartOnShapeFindManyArgs } from "./PartOnShapeFindManyArgs";
import { PartOnShapeUpdateInput } from "./PartOnShapeUpdateInput";
import { PartOnShape } from "./PartOnShape";
@swagger.ApiBasicAuth()
export class PartOnShapeControllerBase {
  constructor(
    protected readonly service: PartOnShapeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "PartOnShape",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: PartOnShape })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: PartOnShapeCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PartOnShape> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "PartOnShape",
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
        `providing the properties: ${properties} on ${"PartOnShape"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        did: true,
        eid: true,
        id: true,
        updatedAt: true,
        wid: true,
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
    resource: "PartOnShape",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [PartOnShape] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => PartOnShapeFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PartOnShape[]> {
    const args = plainToClass(PartOnShapeFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "PartOnShape",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        did: true,
        eid: true,
        id: true,
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
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "PartOnShape",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: PartOnShape })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: PartOnShapeWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PartOnShape | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "PartOnShape",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        did: true,
        eid: true,
        id: true,
        updatedAt: true,
        wid: true,
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
    resource: "PartOnShape",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: PartOnShape })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: PartOnShapeWhereUniqueInput,
    @common.Body()
    data: PartOnShapeUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PartOnShape | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "PartOnShape",
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
        `providing the properties: ${properties} on ${"PartOnShape"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          did: true,
          eid: true,
          id: true,
          updatedAt: true,
          wid: true,
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
    resource: "PartOnShape",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: PartOnShape })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: PartOnShapeWhereUniqueInput
  ): Promise<PartOnShape | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          did: true,
          eid: true,
          id: true,
          updatedAt: true,
          wid: true,
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
