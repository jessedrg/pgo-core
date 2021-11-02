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
import { OrganizationPaymentMethodService } from "../organizationPaymentMethod.service";
import { OrganizationPaymentMethodCreateInput } from "./OrganizationPaymentMethodCreateInput";
import { OrganizationPaymentMethodWhereInput } from "./OrganizationPaymentMethodWhereInput";
import { OrganizationPaymentMethodWhereUniqueInput } from "./OrganizationPaymentMethodWhereUniqueInput";
import { OrganizationPaymentMethodFindManyArgs } from "./OrganizationPaymentMethodFindManyArgs";
import { OrganizationPaymentMethodUpdateInput } from "./OrganizationPaymentMethodUpdateInput";
import { OrganizationPaymentMethod } from "./OrganizationPaymentMethod";
import { OrganizationWhereInput } from "../../organization/base/OrganizationWhereInput";
import { Organization } from "../../organization/base/Organization";
@swagger.ApiBasicAuth()
export class OrganizationPaymentMethodControllerBase {
  constructor(
    protected readonly service: OrganizationPaymentMethodService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "OrganizationPaymentMethod",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: OrganizationPaymentMethod })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: OrganizationPaymentMethodCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<OrganizationPaymentMethod> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "OrganizationPaymentMethod",
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
        `providing the properties: ${properties} on ${"OrganizationPaymentMethod"} creation is forbidden for roles: ${roles}`
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
    resource: "OrganizationPaymentMethod",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [OrganizationPaymentMethod] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => OrganizationPaymentMethodFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<OrganizationPaymentMethod[]> {
    const args = plainToClass(
      OrganizationPaymentMethodFindManyArgs,
      request.query
    );

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "OrganizationPaymentMethod",
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
    resource: "OrganizationPaymentMethod",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: OrganizationPaymentMethod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: OrganizationPaymentMethodWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<OrganizationPaymentMethod | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "OrganizationPaymentMethod",
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
    resource: "OrganizationPaymentMethod",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: OrganizationPaymentMethod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: OrganizationPaymentMethodWhereUniqueInput,
    @common.Body()
    data: OrganizationPaymentMethodUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<OrganizationPaymentMethod | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "OrganizationPaymentMethod",
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
        `providing the properties: ${properties} on ${"OrganizationPaymentMethod"} update is forbidden for roles: ${roles}`
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
    resource: "OrganizationPaymentMethod",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: OrganizationPaymentMethod })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: OrganizationPaymentMethodWhereUniqueInput
  ): Promise<OrganizationPaymentMethod | null> {
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

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/organization")
  @nestAccessControl.UseRoles({
    resource: "OrganizationPaymentMethod",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => OrganizationWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyOrganization(
    @common.Req() request: Request,
    @common.Param() params: OrganizationPaymentMethodWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Organization[]> {
    const query: OrganizationWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Organization",
    });
    const results = await this.service.findOrganization(params.id, {
      where: query,
      select: {
        createdAt: true,
        id: true,
        name: true,

        paymentMethod: {
          select: {
            id: true,
          },
        },

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
  @common.Post("/:id/organization")
  @nestAccessControl.UseRoles({
    resource: "OrganizationPaymentMethod",
    action: "update",
    possession: "any",
  })
  async createOrganization(
    @common.Param() params: OrganizationPaymentMethodWhereUniqueInput,
    @common.Body() body: OrganizationPaymentMethodWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      organization: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "OrganizationPaymentMethod",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"OrganizationPaymentMethod"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/organization")
  @nestAccessControl.UseRoles({
    resource: "OrganizationPaymentMethod",
    action: "update",
    possession: "any",
  })
  async updateOrganization(
    @common.Param() params: OrganizationPaymentMethodWhereUniqueInput,
    @common.Body() body: OrganizationPaymentMethodWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      organization: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "OrganizationPaymentMethod",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"OrganizationPaymentMethod"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/organization")
  @nestAccessControl.UseRoles({
    resource: "OrganizationPaymentMethod",
    action: "update",
    possession: "any",
  })
  async deleteOrganization(
    @common.Param() params: OrganizationPaymentMethodWhereUniqueInput,
    @common.Body() body: OrganizationPaymentMethodWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      organization: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "OrganizationPaymentMethod",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"OrganizationPaymentMethod"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
