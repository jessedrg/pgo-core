import { ArgsType, Field } from "@nestjs/graphql";
import { AgentWhereUniqueInput } from "./AgentWhereUniqueInput";
import { AgentUpdateInput } from "./AgentUpdateInput";

@ArgsType()
class UpdateAgentArgs {
  @Field(() => AgentWhereUniqueInput, { nullable: false })
  where!: AgentWhereUniqueInput;
  @Field(() => AgentUpdateInput, { nullable: false })
  data!: AgentUpdateInput;
}

export { UpdateAgentArgs };
