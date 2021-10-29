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
import { ProviderService } from "../provider.service";
import { ProviderCreateInput } from "./ProviderCreateInput";
import { ProviderWhereInput } from "./ProviderWhereInput";
import { ProviderWhereUniqueInput } from "./ProviderWhereUniqueInput";
import { ProviderFindManyArgs } from "./ProviderFindManyArgs";
import { ProviderUpdateInput } from "./ProviderUpdateInput";
import { Provider } from "./Provider";
@swagger.ApiBasicAuth()
export class ProviderControllerBase {
  constructor(
    protected readonly service: ProviderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Provider",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Provider })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ProviderCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Provider> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Provider",
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
        `providing the properties: ${properties} on ${"Provider"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        currency: true,
        dateFormat: true,
        id: true,
        name: true,
        rating: true,
        ratingData: true,
        shippmentDates: true,
        technologies: true,
        typeson: true,
        updatedAt: true,
        workingDays: true,
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
    resource: "Provider",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Provider] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => ProviderFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Provider[]> {
    const args = plainToClass(ProviderFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Provider",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        currency: true,
        dateFormat: true,
        id: true,
        name: true,
        rating: true,
        ratingData: true,
        shippmentDates: true,
        technologies: true,
        typeson: true,
        updatedAt: true,
        workingDays: true,
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
    resource: "Provider",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Provider })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ProviderWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Provider | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Provider",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        currency: true,
        dateFormat: true,
        id: true,
        name: true,
        rating: true,
        ratingData: true,
        shippmentDates: true,
        technologies: true,
        typeson: true,
        updatedAt: true,
        workingDays: true,
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
    resource: "Provider",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Provider })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ProviderWhereUniqueInput,
    @common.Body()
    data: ProviderUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Provider | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Provider",
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
        `providing the properties: ${properties} on ${"Provider"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          currency: true,
          dateFormat: true,
          id: true,
          name: true,
          rating: true,
          ratingData: true,
          shippmentDates: true,
          technologies: true,
          typeson: true,
          updatedAt: true,
          workingDays: true,
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
    resource: "Provider",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Provider })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ProviderWhereUniqueInput
  ): Promise<Provider | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          currency: true,
          dateFormat: true,
          id: true,
          name: true,
          rating: true,
          ratingData: true,
          shippmentDates: true,
          technologies: true,
          typeson: true,
          updatedAt: true,
          workingDays: true,
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
