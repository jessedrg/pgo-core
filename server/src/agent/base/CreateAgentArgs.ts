import { ArgsType, Field } from "@nestjs/graphql";
import { AgentCreateInput } from "./AgentCreateInput";

@ArgsType()
class CreateAgentArgs {
  @Field(() => AgentCreateInput, { nullable: false })
  data!: AgentCreateInput;
}

export { CreateAgentArgs };
