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
import { CreateHolidayArgs } from "./CreateHolidayArgs";
import { UpdateHolidayArgs } from "./UpdateHolidayArgs";
import { DeleteHolidayArgs } from "./DeleteHolidayArgs";
import { HolidayFindManyArgs } from "./HolidayFindManyArgs";
import { HolidayFindUniqueArgs } from "./HolidayFindUniqueArgs";
import { Holiday } from "./Holiday";
import { ProviderFindManyArgs } from "../../provider/base/ProviderFindManyArgs";
import { Provider } from "../../provider/base/Provider";
import { HolidayService } from "../holiday.service";

@graphql.Resolver(() => Holiday)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class HolidayResolverBase {
  constructor(
    protected readonly service: HolidayService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Holiday",
    action: "read",
    possession: "any",
  })
  async _holidaysMeta(
    @graphql.Args() args: HolidayFindManyArgs
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

  @graphql.Query(() => [Holiday])
  @nestAccessControl.UseRoles({
    resource: "Holiday",
    action: "read",
    possession: "any",
  })
  async holidays(
    @graphql.Args() args: HolidayFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Holiday[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Holiday",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Holiday, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Holiday",
    action: "read",
    possession: "own",
  })
  async holiday(
    @graphql.Args() args: HolidayFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Holiday | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Holiday",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Holiday)
  @nestAccessControl.UseRoles({
    resource: "Holiday",
    action: "create",
    possession: "any",
  })
  async createHoliday(
    @graphql.Args() args: CreateHolidayArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Holiday> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Holiday",
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
        `providing the properties: ${properties} on ${"Holiday"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Holiday)
  @nestAccessControl.UseRoles({
    resource: "Holiday",
    action: "update",
    possession: "any",
  })
  async updateHoliday(
    @graphql.Args() args: UpdateHolidayArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Holiday | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Holiday",
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
        `providing the properties: ${properties} on ${"Holiday"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Holiday)
  @nestAccessControl.UseRoles({
    resource: "Holiday",
    action: "delete",
    possession: "any",
  })
  async deleteHoliday(
    @graphql.Args() args: DeleteHolidayArgs
  ): Promise<Holiday | null> {
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

  @graphql.ResolveField(() => [Provider])
  @nestAccessControl.UseRoles({
    resource: "Holiday",
    action: "read",
    possession: "any",
  })
  async providersInHolidays(
    @graphql.Parent() parent: Holiday,
    @graphql.Args() args: ProviderFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Provider[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Provider",
    });
    const results = await this.service.findProvidersInHolidays(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
