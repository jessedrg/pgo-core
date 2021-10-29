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
import { CreatePartArgs } from "./CreatePartArgs";
import { UpdatePartArgs } from "./UpdatePartArgs";
import { DeletePartArgs } from "./DeletePartArgs";
import { PartFindManyArgs } from "./PartFindManyArgs";
import { PartFindUniqueArgs } from "./PartFindUniqueArgs";
import { Part } from "./Part";
import { PartConfigurationFindManyArgs } from "../../partConfiguration/base/PartConfigurationFindManyArgs";
import { PartConfiguration } from "../../partConfiguration/base/PartConfiguration";
import { PartMessageFindManyArgs } from "../../partMessage/base/PartMessageFindManyArgs";
import { PartMessage } from "../../partMessage/base/PartMessage";
import { PartOnShapeFindManyArgs } from "../../partOnShape/base/PartOnShapeFindManyArgs";
import { PartOnShape } from "../../partOnShape/base/PartOnShape";
import { ProductionItemFindManyArgs } from "../../productionItem/base/ProductionItemFindManyArgs";
import { ProductionItem } from "../../productionItem/base/ProductionItem";
import { QuoteItemFindManyArgs } from "../../quoteItem/base/QuoteItemFindManyArgs";
import { QuoteItem } from "../../quoteItem/base/QuoteItem";
import { Offer } from "../../offer/base/Offer";
import { Quote } from "../../quote/base/Quote";
import { PartService } from "../part.service";

@graphql.Resolver(() => Part)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PartResolverBase {
  constructor(
    protected readonly service: PartService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "read",
    possession: "any",
  })
  async _partsMeta(
    @graphql.Args() args: PartFindManyArgs
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

  @graphql.Query(() => [Part])
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "read",
    possession: "any",
  })
  async parts(
    @graphql.Args() args: PartFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Part[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Part",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Part, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "read",
    possession: "own",
  })
  async part(
    @graphql.Args() args: PartFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Part | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Part",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Part)
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "create",
    possession: "any",
  })
  async createPart(
    @graphql.Args() args: CreatePartArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Part> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Part",
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
        `providing the properties: ${properties} on ${"Part"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        offer: args.data.offer
          ? {
              connect: args.data.offer,
            }
          : undefined,

        partonshape: args.data.partonshape
          ? {
              connect: args.data.partonshape,
            }
          : undefined,

        quote: args.data.quote
          ? {
              connect: args.data.quote,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Part)
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "update",
    possession: "any",
  })
  async updatePart(
    @graphql.Args() args: UpdatePartArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Part | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Part",
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
        `providing the properties: ${properties} on ${"Part"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          offer: args.data.offer
            ? {
                connect: args.data.offer,
              }
            : undefined,

          partonshape: args.data.partonshape
            ? {
                connect: args.data.partonshape,
              }
            : undefined,

          quote: args.data.quote
            ? {
                connect: args.data.quote,
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

  @graphql.Mutation(() => Part)
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "delete",
    possession: "any",
  })
  async deletePart(@graphql.Args() args: DeletePartArgs): Promise<Part | null> {
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

  @graphql.ResolveField(() => [PartConfiguration])
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "read",
    possession: "any",
  })
  async partConfigurations(
    @graphql.Parent() parent: Part,
    @graphql.Args() args: PartConfigurationFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PartConfiguration[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "PartConfiguration",
    });
    const results = await this.service.findPartConfigurations(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [PartMessage])
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "read",
    possession: "any",
  })
  async partMessages(
    @graphql.Parent() parent: Part,
    @graphql.Args() args: PartMessageFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PartMessage[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "PartMessage",
    });
    const results = await this.service.findPartMessages(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [PartOnShape])
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "read",
    possession: "any",
  })
  async partOnShapes(
    @graphql.Parent() parent: Part,
    @graphql.Args() args: PartOnShapeFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PartOnShape[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "PartOnShape",
    });
    const results = await this.service.findPartOnShapes(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [ProductionItem])
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "read",
    possession: "any",
  })
  async productionItems(
    @graphql.Parent() parent: Part,
    @graphql.Args() args: ProductionItemFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<ProductionItem[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ProductionItem",
    });
    const results = await this.service.findProductionItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => [QuoteItem])
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "read",
    possession: "any",
  })
  async quoteItems(
    @graphql.Parent() parent: Part,
    @graphql.Args() args: QuoteItemFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<QuoteItem[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "QuoteItem",
    });
    const results = await this.service.findQuoteItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => Offer, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "read",
    possession: "any",
  })
  async offer(
    @graphql.Parent() parent: Part,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Offer | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Offer",
    });
    const result = await this.service.getOffer(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => PartOnShape, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "read",
    possession: "any",
  })
  async partonshape(
    @graphql.Parent() parent: Part,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<PartOnShape | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "PartOnShape",
    });
    const result = await this.service.getPartonshape(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => Quote, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Part",
    action: "read",
    possession: "any",
  })
  async quote(
    @graphql.Parent() parent: Part,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Quote | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Quote",
    });
    const result = await this.service.getQuote(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
