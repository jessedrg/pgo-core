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
import { CreateOfferArgs } from "./CreateOfferArgs";
import { UpdateOfferArgs } from "./UpdateOfferArgs";
import { DeleteOfferArgs } from "./DeleteOfferArgs";
import { OfferFindManyArgs } from "./OfferFindManyArgs";
import { OfferFindUniqueArgs } from "./OfferFindUniqueArgs";
import { Offer } from "./Offer";
import { AccountFindManyArgs } from "../../account/base/AccountFindManyArgs";
import { Account } from "../../account/base/Account";
import { PartFindManyArgs } from "../../part/base/PartFindManyArgs";
import { Part } from "../../part/base/Part";
import { OfferService } from "../offer.service";

@graphql.Resolver(() => Offer)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OfferResolverBase {
  constructor(
    protected readonly service: OfferService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Offer",
    action: "read",
    possession: "any",
  })
  async _offersMeta(
    @graphql.Args() args: OfferFindManyArgs
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

  @graphql.Query(() => [Offer])
  @nestAccessControl.UseRoles({
    resource: "Offer",
    action: "read",
    possession: "any",
  })
  async offers(
    @graphql.Args() args: OfferFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Offer[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Offer",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Offer, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Offer",
    action: "read",
    possession: "own",
  })
  async offer(
    @graphql.Args() args: OfferFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Offer | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Offer",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Offer)
  @nestAccessControl.UseRoles({
    resource: "Offer",
    action: "create",
    possession: "any",
  })
  async createOffer(
    @graphql.Args() args: CreateOfferArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Offer> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Offer",
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
        `providing the properties: ${properties} on ${"Offer"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Offer)
  @nestAccessControl.UseRoles({
    resource: "Offer",
    action: "update",
    possession: "any",
  })
  async updateOffer(
    @graphql.Args() args: UpdateOfferArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Offer | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Offer",
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
        `providing the properties: ${properties} on ${"Offer"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => Offer)
  @nestAccessControl.UseRoles({
    resource: "Offer",
    action: "delete",
    possession: "any",
  })
  async deleteOffer(
    @graphql.Args() args: DeleteOfferArgs
  ): Promise<Offer | null> {
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

  @graphql.ResolveField(() => [Account])
  @nestAccessControl.UseRoles({
    resource: "Offer",
    action: "read",
    possession: "any",
  })
  async account(
    @graphql.Parent() parent: Offer,
    @graphql.Args() args: AccountFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Account[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Account",
    });
    const results = await this.service.findAccount(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [Part])
  @nestAccessControl.UseRoles({
    resource: "Offer",
    action: "read",
    possession: "any",
  })
  async parts(
    @graphql.Parent() parent: Offer,
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
}
