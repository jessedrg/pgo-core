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
@swagger.ApiBasicAuth()
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
}
