import { ArgsType, Field } from "@nestjs/graphql";
import { AgentWhereUniqueInput } from "./AgentWhereUniqueInput";

@ArgsType()
class AgentFindUniqueArgs {
  @Field(() => AgentWhereUniqueInput, { nullable: false })
  where!: AgentWhereUniqueInput;
}

export { AgentFindUniqueArgs };
