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
import { OrganizationService } from "../organization.service";
import { OrganizationCreateInput } from "./OrganizationCreateInput";
import { OrganizationWhereInput } from "./OrganizationWhereInput";
import { OrganizationWhereUniqueInput } from "./OrganizationWhereUniqueInput";
import { OrganizationFindManyArgs } from "./OrganizationFindManyArgs";
import { OrganizationUpdateInput } from "./OrganizationUpdateInput";
import { Organization } from "./Organization";
import { AccountPaymentMethodWhereInput } from "../../accountPaymentMethod/base/AccountPaymentMethodWhereInput";
import { AccountPaymentMethod } from "../../accountPaymentMethod/base/AccountPaymentMethod";
import { OrderWhereInput } from "../../order/base/OrderWhereInput";
import { Order } from "../../order/base/Order";
import { UserWhereInput } from "../../user/base/UserWhereInput";
import { User } from "../../user/base/User";
@swagger.ApiBearerAuth()
export class OrganizationControllerBase {
  constructor(
    protected readonly service: OrganizationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Organization })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: OrganizationCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Organization> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Organization",
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
        `providing the properties: ${properties} on ${"Organization"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        contactAdressId: data.contactAdressId
          ? {
              connect: data.contactAdressId,
            }
          : undefined,

        paymenMethodId: data.paymenMethodId
          ? {
              connect: data.paymenMethodId,
            }
          : undefined,
      },
      select: {
        contactAdressId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,

        paymenMethodId: {
          select: {
            id: true,
          },
        },

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
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Organization] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => OrganizationFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Organization[]> {
    const args = plainToClass(OrganizationFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Organization",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        contactAdressId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,

        paymenMethodId: {
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
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Organization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: OrganizationWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Organization | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Organization",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        contactAdressId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,

        paymenMethodId: {
          select: {
            id: true,
          },
        },

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
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Organization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body()
    data: OrganizationUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Organization | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Organization",
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
        `providing the properties: ${properties} on ${"Organization"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          contactAdressId: data.contactAdressId
            ? {
                connect: data.contactAdressId,
              }
            : undefined,

          paymenMethodId: data.paymenMethodId
            ? {
                connect: data.paymenMethodId,
              }
            : undefined,
        },
        select: {
          contactAdressId: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          name: true,

          paymenMethodId: {
            select: {
              id: true,
            },
          },

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
    resource: "Organization",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Organization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: OrganizationWhereUniqueInput
  ): Promise<Organization | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          contactAdressId: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          name: true,

          paymenMethodId: {
            select: {
              id: true,
            },
          },

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
  @common.Get("/:id/accountPaymentMethodInOrganization")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => AccountPaymentMethodWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyAccountPaymentMethodInOrganization(
    @common.Req() request: Request,
    @common.Param() params: OrganizationWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<AccountPaymentMethod[]> {
    const query: AccountPaymentMethodWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "AccountPaymentMethod",
    });
    const results = await this.service.findAccountPaymentMethodInOrganization(
      params.id,
      {
        where: query,
        select: {
          accountId: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          data: true,
          id: true,

          organizationId: {
            select: {
              id: true,
            },
          },

          type: true,
          updatedAt: true,
        },
      }
    );
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/accountPaymentMethodInOrganization")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async createAccountPaymentMethodInOrganization(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      accountPaymentMethodInOrganization: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Organization",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Organization"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/accountPaymentMethodInOrganization")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async updateAccountPaymentMethodInOrganization(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      accountPaymentMethodInOrganization: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Organization",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Organization"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/accountPaymentMethodInOrganization")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async deleteAccountPaymentMethodInOrganization(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      accountPaymentMethodInOrganization: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Organization",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Organization"} is forbidden for roles: ${roles}`
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
  @common.Get("/:id/organizationInOrder")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => OrderWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyOrganizationInOrder(
    @common.Req() request: Request,
    @common.Param() params: OrganizationWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Order[]> {
    const query: OrderWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Order",
    });
    const results = await this.service.findOrganizationInOrder(params.id, {
      where: query,
      select: {
        acountId: {
          select: {
            id: true,
          },
        },

        billingAddress: true,
        comment: true,
        createdAt: true,
        customNo: true,
        estimatedDays: true,
        fees: true,
        id: true,

        organizationId: {
          select: {
            id: true,
          },
        },

        shipmentId: {
          select: {
            id: true,
          },
        },

        shippingaddress: true,
        state: true,
        subtotal: true,
        taxes: true,
        total: true,
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
  @common.Post("/:id/organizationInOrder")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async createOrganizationInOrder(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      organizationInOrder: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Organization",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Organization"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/organizationInOrder")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async updateOrganizationInOrder(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      organizationInOrder: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Organization",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Organization"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/organizationInOrder")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async deleteOrganizationInOrder(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      organizationInOrder: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Organization",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Organization"} is forbidden for roles: ${roles}`
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
  @common.Get("/:id/usersInOrganization")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => UserWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyUsersInOrganization(
    @common.Req() request: Request,
    @common.Param() params: OrganizationWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<User[]> {
    const query: UserWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const results = await this.service.findUsersInOrganization(params.id, {
      where: query,
      select: {
        accountId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,

        organizationId: {
          select: {
            id: true,
          },
        },

        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/usersInOrganization")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async createUsersInOrganization(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      usersInOrganization: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Organization",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Organization"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/usersInOrganization")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async updateUsersInOrganization(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      usersInOrganization: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Organization",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Organization"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/usersInOrganization")
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "update",
    possession: "any",
  })
  async deleteUsersInOrganization(
    @common.Param() params: OrganizationWhereUniqueInput,
    @common.Body() body: OrganizationWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      usersInOrganization: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Organization",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Organization"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
