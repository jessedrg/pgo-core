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
import { CreateAgentArgs } from "./CreateAgentArgs";
import { UpdateAgentArgs } from "./UpdateAgentArgs";
import { DeleteAgentArgs } from "./DeleteAgentArgs";
import { AgentFindManyArgs } from "./AgentFindManyArgs";
import { AgentFindUniqueArgs } from "./AgentFindUniqueArgs";
import { Agent } from "./Agent";
import { AgentService } from "../agent.service";

@graphql.Resolver(() => Agent)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class AgentResolverBase {
  constructor(
    protected readonly service: AgentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Agent",
    action: "read",
    possession: "any",
  })
  async _agentsMeta(
    @graphql.Args() args: AgentFindManyArgs
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

  @graphql.Query(() => [Agent])
  @nestAccessControl.UseRoles({
    resource: "Agent",
    action: "read",
    possession: "any",
  })
  async agents(
    @graphql.Args() args: AgentFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Agent[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Agent",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Agent, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Agent",
    action: "read",
    possession: "own",
  })
  async agent(
    @graphql.Args() args: AgentFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Agent | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Agent",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Agent)
  @nestAccessControl.UseRoles({
    resource: "Agent",
    action: "create",
    possession: "any",
  })
  async createAgent(
    @graphql.Args() args: CreateAgentArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Agent> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Agent",
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
        `providing the properties: ${properties} on ${"Agent"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Agent)
  @nestAccessControl.UseRoles({
    resource: "Agent",
    action: "update",
    possession: "any",
  })
  async updateAgent(
    @graphql.Args() args: UpdateAgentArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Agent | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Agent",
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
        `providing the properties: ${properties} on ${"Agent"} update is forbidden for roles: ${roles}`
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

  @graphql.Mutation(() => Agent)
  @nestAccessControl.UseRoles({
    resource: "Agent",
    action: "delete",
    possession: "any",
  })
  async deleteAgent(
    @graphql.Args() args: DeleteAgentArgs
  ): Promise<Agent | null> {
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
}
