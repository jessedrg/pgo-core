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
import { AccountPaymentMethodService } from "../accountPaymentMethod.service";
import { AccountPaymentMethodCreateInput } from "./AccountPaymentMethodCreateInput";
import { AccountPaymentMethodWhereInput } from "./AccountPaymentMethodWhereInput";
import { AccountPaymentMethodWhereUniqueInput } from "./AccountPaymentMethodWhereUniqueInput";
import { AccountPaymentMethodFindManyArgs } from "./AccountPaymentMethodFindManyArgs";
import { AccountPaymentMethodUpdateInput } from "./AccountPaymentMethodUpdateInput";
import { AccountPaymentMethod } from "./AccountPaymentMethod";
@swagger.ApiBasicAuth()
export class AccountPaymentMethodControllerBase {
  constructor(
    protected readonly service: AccountPaymentMethodService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "AccountPaymentMethod",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: AccountPaymentMethod })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: AccountPaymentMethodCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<AccountPaymentMethod> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "AccountPaymentMethod",
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
        `providing the properties: ${properties} on ${"AccountPaymentMethod"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        data: true,
        id: true,
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
    resource: "AccountPaymentMethod",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [AccountPaymentMethod] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => AccountPaymentMethodFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<AccountPaymentMethod[]> {
    const args = plainToClass(AccountPaymentMethodFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "AccountPaymentMethod",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        data: true,
        id: true,
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
    resource: "AccountPaymentMethod",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: AccountPaymentMethod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: AccountPaymentMethodWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<AccountPaymentMethod | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "AccountPaymentMethod",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        data: true,
        id: true,
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
    resource: "AccountPaymentMethod",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: AccountPaymentMethod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: AccountPaymentMethodWhereUniqueInput,
    @common.Body()
    data: AccountPaymentMethodUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<AccountPaymentMethod | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "AccountPaymentMethod",
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
        `providing the properties: ${properties} on ${"AccountPaymentMethod"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          data: true,
          id: true,
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
    resource: "AccountPaymentMethod",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: AccountPaymentMethod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: AccountPaymentMethodWhereUniqueInput
  ): Promise<AccountPaymentMethod | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          data: true,
          id: true,
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
