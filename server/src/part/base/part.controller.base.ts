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
import { PartMessageWhereInput } from "../../partMessage/base/PartMessageWhereInput";
import { PartMessage } from "../../partMessage/base/PartMessage";
import { ProductionItemWhereInput } from "../../productionItem/base/ProductionItemWhereInput";
import { ProductionItem } from "../../productionItem/base/ProductionItem";
import { QuoteItemWhereInput } from "../../quoteItem/base/QuoteItemWhereInput";
import { QuoteItem } from "../../quoteItem/base/QuoteItem";
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
      data: {
        ...data,

        account: data.account
          ? {
              connect: data.account,
            }
          : undefined,

        blueprint: data.blueprint
          ? {
              connect: data.blueprint,
            }
          : undefined,

        offer: data.offer
          ? {
              connect: data.offer,
            }
          : undefined,

        organization: data.organization
          ? {
              connect: data.organization,
            }
          : undefined,

        originalBlueprint: data.originalBlueprint
          ? {
              connect: data.originalBlueprint,
            }
          : undefined,

        originalModel: data.originalModel
          ? {
              connect: data.originalModel,
            }
          : undefined,

        partConfiguration: data.partConfiguration
          ? {
              connect: data.partConfiguration,
            }
          : undefined,

        partOnShape: data.partOnShape
          ? {
              connect: data.partOnShape,
            }
          : undefined,

        stepModel: data.stepModel
          ? {
              connect: data.stepModel,
            }
          : undefined,

        stlModel: data.stlModel
          ? {
              connect: data.stlModel,
            }
          : undefined,
      },
      select: {
        account: {
          select: {
            id: true,
          },
        },

        blueprint: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        offer: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },

        originalBlueprint: {
          select: {
            id: true,
          },
        },

        originalModel: {
          select: {
            id: true,
          },
        },

        partConfiguration: {
          select: {
            id: true,
          },
        },

        partOnShape: {
          select: {
            id: true,
          },
        },

        partsCount: true,
        process: true,
        quantities: true,
        status: true,

        stepModel: {
          select: {
            id: true,
          },
        },

        stlModel: {
          select: {
            id: true,
          },
        },

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
        account: {
          select: {
            id: true,
          },
        },

        blueprint: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        offer: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },

        originalBlueprint: {
          select: {
            id: true,
          },
        },

        originalModel: {
          select: {
            id: true,
          },
        },

        partConfiguration: {
          select: {
            id: true,
          },
        },

        partOnShape: {
          select: {
            id: true,
          },
        },

        partsCount: true,
        process: true,
        quantities: true,
        status: true,

        stepModel: {
          select: {
            id: true,
          },
        },

        stlModel: {
          select: {
            id: true,
          },
        },

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
        account: {
          select: {
            id: true,
          },
        },

        blueprint: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        offer: {
          select: {
            id: true,
          },
        },

        organization: {
          select: {
            id: true,
          },
        },

        originalBlueprint: {
          select: {
            id: true,
          },
        },

        originalModel: {
          select: {
            id: true,
          },
        },

        partConfiguration: {
          select: {
            id: true,
          },
        },

        partOnShape: {
          select: {
            id: true,
          },
        },

        partsCount: true,
        process: true,
        quantities: true,
        status: true,

        stepModel: {
          select: {
            id: true,
          },
        },

        stlModel: {
          select: {
            id: true,
          },
        },

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
        data: {
          ...data,

          account: data.account
            ? {
                connect: data.account,
              }
            : undefined,

          blueprint: data.blueprint
            ? {
                connect: data.blueprint,
              }
            : undefined,

          offer: data.offer
            ? {
                connect: data.offer,
              }
            : undefined,

          organization: data.organization
            ? {
                connect: data.organization,
              }
            : undefined,

          originalBlueprint: data.originalBlueprint
            ? {
                connect: data.originalBlueprint,
              }
            : undefined,

          originalModel: data.originalModel
            ? {
                connect: data.originalModel,
              }
            : undefined,

          partConfiguration: data.partConfiguration
            ? {
                connect: data.partConfiguration,
              }
            : undefined,

          partOnShape: data.partOnShape
            ? {
                connect: data.partOnShape,
              }
            : undefined,

          stepModel: data.stepModel
            ? {
                connect: data.stepModel,
              }
            : undefined,

          stlModel: data.stlModel
            ? {
                connect: data.stlModel,
              }
            : undefined,
        },
        select: {
          account: {
            select: {
              id: true,
            },
          },

          blueprint: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          offer: {
            select: {
              id: true,
            },
          },

          organization: {
            select: {
              id: true,
            },
          },

          originalBlueprint: {
            select: {
              id: true,
            },
          },

          originalModel: {
            select: {
              id: true,
            },
          },

          partConfiguration: {
            select: {
              id: true,
            },
          },

          partOnShape: {
            select: {
              id: true,
            },
          },

          partsCount: true,
          process: true,
          quantities: true,
          status: true,

          stepModel: {
            select: {
              id: true,
            },
          },

          stlModel: {
            select: {
              id: true,
            },
          },

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
          account: {
            select: {
              id: true,
            },
          },

          blueprint: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          offer: {
            select: {
              id: true,
            },
          },

          organization: {
            select: {
              id: true,
            },
          },

          originalBlueprint: {
            select: {
              id: true,
            },
          },

          originalModel: {
            select: {
              id: true,
            },
          },

          partConfiguration: {
            select: {
              id: true,
            },
          },

          partOnShape: {
            select: {
              id: true,
            },
          },

          partsCount: true,
          process: true,
          quantities: true,
          status: true,

          stepModel: {
            select: {
              id: true,
            },
          },

          stlModel: {
            select: {
              id: true,
            },
          },

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
  @common.Get("/:id/partMessages")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => PartMessageWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyPartMessages(
    @common.Req() request: Request,
    @common.Param() params: PartWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<PartMessage[]> {
    const query: PartMessageWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "PartMessage",
    });
    const results = await this.service.findPartMessages(params.id, {
      where: query,
      select: {
        createdAt: true,
        id: true,
        message: true,
        messageType: true,

        part: {
          select: {
            id: true,
          },
        },

        sender: {
          select: {
            id: true,
          },
        },

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
  @common.Post("/:id/partMessages")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "update",
    possession: "any",
  })
  async createPartMessages(
    @common.Param() params: PartWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      partMessages: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Part"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/partMessages")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "update",
    possession: "any",
  })
  async updatePartMessages(
    @common.Param() params: PartWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      partMessages: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Part"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/partMessages")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "update",
    possession: "any",
  })
  async deletePartMessages(
    @common.Param() params: PartWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      partMessages: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Part"} is forbidden for roles: ${roles}`
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
  @common.Get("/:id/productionItems")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => ProductionItemWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyProductionItems(
    @common.Req() request: Request,
    @common.Param() params: PartWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ProductionItem[]> {
    const query: ProductionItemWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ProductionItem",
    });
    const results = await this.service.findProductionItems(params.id, {
      where: query,
      select: {
        createdAt: true,
        id: true,

        part: {
          select: {
            id: true,
          },
        },

        production: {
          select: {
            id: true,
          },
        },

        quantity: true,
        shippedQuantity: true,
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
  @common.Post("/:id/productionItems")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "update",
    possession: "any",
  })
  async createProductionItems(
    @common.Param() params: PartWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      productionItems: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Part"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/productionItems")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "update",
    possession: "any",
  })
  async updateProductionItems(
    @common.Param() params: PartWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      productionItems: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Part"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/productionItems")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "update",
    possession: "any",
  })
  async deleteProductionItems(
    @common.Param() params: PartWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      productionItems: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Part"} is forbidden for roles: ${roles}`
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
  @common.Get("/:id/quoteItems")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "read",
    possession: "any",
  })
  @swagger.ApiQuery({
    type: () => QuoteItemWhereInput,
    style: "deepObject",
    explode: true,
  })
  async findManyQuoteItems(
    @common.Req() request: Request,
    @common.Param() params: PartWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<QuoteItem[]> {
    const query: QuoteItemWhereInput = request.query;
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "QuoteItem",
    });
    const results = await this.service.findQuoteItems(params.id, {
      where: query,
      select: {
        constructionType: true,
        createdAt: true,
        id: true,
        margins: true,

        part: {
          select: {
            id: true,
          },
        },

        productionDays: true,

        provider: {
          select: {
            id: true,
          },
        },

        quantities: true,

        quote: {
          select: {
            id: true,
          },
        },

        status: true,
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
  @common.Post("/:id/quoteItems")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "update",
    possession: "any",
  })
  async createQuoteItems(
    @common.Param() params: PartWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      quoteItems: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Part"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/quoteItems")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "update",
    possession: "any",
  })
  async updateQuoteItems(
    @common.Param() params: PartWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      quoteItems: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Part"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/quoteItems")
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "update",
    possession: "any",
  })
  async deleteQuoteItems(
    @common.Param() params: PartWhereUniqueInput,
    @common.Body() body: PartWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      quoteItems: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Part"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
