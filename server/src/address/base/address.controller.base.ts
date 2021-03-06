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
import { AddressService } from "../address.service";
import { AddressCreateInput } from "./AddressCreateInput";
import { AddressWhereInput } from "./AddressWhereInput";
import { AddressWhereUniqueInput } from "./AddressWhereUniqueInput";
import { AddressFindManyArgs } from "./AddressFindManyArgs";
import { AddressUpdateInput } from "./AddressUpdateInput";
import { Address } from "./Address";
@swagger.ApiBasicAuth()
export class AddressControllerBase {
  constructor(
    protected readonly service: AddressService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Address",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Address })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: AddressCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Address> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Address",
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
        `providing the properties: ${properties} on ${"Address"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        organization: data.organization
          ? {
              connect: data.organization,
            }
          : undefined,
      },
      select: {
        company: true,
        country: true,
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,
        locality: true,

        organization: {
          select: {
            id: true,
          },
        },

        phone: true,
        phonePrefix: true,
        postalCode: true,
        state: true,
        street: true,
        streetNumber: true,
        type: true,
        updatedAt: true,
        vat: true,
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
    resource: "Address",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Address] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => AddressFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Address[]> {
    const args = plainToClass(AddressFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Address",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        company: true,
        country: true,
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,
        locality: true,

        organization: {
          select: {
            id: true,
          },
        },

        phone: true,
        phonePrefix: true,
        postalCode: true,
        state: true,
        street: true,
        streetNumber: true,
        type: true,
        updatedAt: true,
        vat: true,
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
    resource: "Address",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Address })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: AddressWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Address | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Address",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        company: true,
        country: true,
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,
        locality: true,

        organization: {
          select: {
            id: true,
          },
        },

        phone: true,
        phonePrefix: true,
        postalCode: true,
        state: true,
        street: true,
        streetNumber: true,
        type: true,
        updatedAt: true,
        vat: true,
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
    resource: "Address",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Address })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: AddressWhereUniqueInput,
    @common.Body()
    data: AddressUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Address | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Address",
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
        `providing the properties: ${properties} on ${"Address"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          organization: data.organization
            ? {
                connect: data.organization,
              }
            : undefined,
        },
        select: {
          company: true,
          country: true,
          createdAt: true,
          firstName: true,
          id: true,
          lastName: true,
          locality: true,

          organization: {
            select: {
              id: true,
            },
          },

          phone: true,
          phonePrefix: true,
          postalCode: true,
          state: true,
          street: true,
          streetNumber: true,
          type: true,
          updatedAt: true,
          vat: true,
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
    resource: "Address",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Address })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: AddressWhereUniqueInput
  ): Promise<Address | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          company: true,
          country: true,
          createdAt: true,
          firstName: true,
          id: true,
          lastName: true,
          locality: true,

          organization: {
            select: {
              id: true,
            },
          },

          phone: true,
          phonePrefix: true,
          postalCode: true,
          state: true,
          street: true,
          streetNumber: true,
          type: true,
          updatedAt: true,
          vat: true,
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
