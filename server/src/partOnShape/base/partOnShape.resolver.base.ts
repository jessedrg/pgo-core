import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreatePartOnShapeArgs } from "./CreatePartOnShapeArgs";
import { UpdatePartOnShapeArgs } from "./UpdatePartOnShapeArgs";
import { DeletePartOnShapeArgs } from "./DeletePartOnShapeArgs";
import { PartOnShapeFindManyArgs } from "./PartOnShapeFindManyArgs";
import { PartOnShapeFindUniqueArgs } from "./PartOnShapeFindUniqueArgs";
import { PartOnShape } from "./PartOnShape";
import { PartFindManyArgs } from "../../part/base/PartFindManyArgs";
import { Part } from "../../part/base/Part";
import { PartOnShapeService } from "../partOnShape.service";

@graphql.Resolver(() => PartOnShape)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PartOnShapeResolverBase {
  constructor(
    protected readonly service: PartOnShapeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PartOnShape",
    action: "read",
    possession: "any",
  })
  async _partOnShapesMeta(
    @graphql.Args() args: PartOnShapeFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [PartOnShape])
  @nestAccessControl.UseRoles({
    resource: "PartOnShape",
    action: "read",
    possession: "any",
  })
  async partOnShapes(
    @graphql.Args() args: PartOnShapeFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PartOnShape[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "PartOnShape",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => PartOnShape, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PartOnShape",
    action: "read",
    possession: "own",
  })
  async partOnShape(
    @graphql.Args() args: PartOnShapeFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PartOnShape | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "PartOnShape",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => PartOnShape)
  @nestAccessControl.UseRoles({
    resource: "PartOnShape",
    action: "create",
    possession: "any",
  })
  async createPartOnShape(
    @graphql.Args() args: CreatePartOnShapeArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PartOnShape> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "PartOnShape",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"PartOnShape"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        part: args.data.part
          ? {
              connect: args.data.part,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => PartOnShape)
  @nestAccessControl.UseRoles({
    resource: "PartOnShape",
    action: "update",
    possession: "any",
  })
  async updatePartOnShape(
    @graphql.Args() args: UpdatePartOnShapeArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PartOnShape | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "PartOnShape",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"PartOnShape"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          part: args.data.part
            ? {
                connect: args.data.part,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PartOnShape)
  @nestAccessControl.UseRoles({
    resource: "PartOnShape",
    action: "delete",
    possession: "any",
  })
  async deletePartOnShape(
    @graphql.Args() args: DeletePartOnShapeArgs
  ): Promise<PartOnShape | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Part])
  @nestAccessControl.UseRoles({
    resource: "PartOnShape",
    action: "read",
    possession: "any",
  })
  async parts(
    @graphql.Parent() parent: PartOnShape,
    @graphql.Args() args: PartFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Part[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Part",
    });
    const results = await this.service.findParts(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => Part, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PartOnShape",
    action: "read",
    possession: "any",
  })
  async part(
    @graphql.Parent() parent: PartOnShape,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Part | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Part",
    });
    const result = await this.service.getPart(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
