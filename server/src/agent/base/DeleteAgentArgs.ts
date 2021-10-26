import { ArgsType, Field } from "@nestjs/graphql";
import { AgentWhereUniqueInput } from "./AgentWhereUniqueInput";

@ArgsType()
class DeleteAgentArgs {
  @Field(() => AgentWhereUniqueInput, { nullable: false })
  where!: AgentWhereUniqueInput;
}

export { DeleteAgentArgs };
