import { ArgsType, Field } from "@nestjs/graphql";
import { SessionWhereUniqueInput } from "./SessionWhereUniqueInput";

@ArgsType()
class SessionFindUniqueArgs {
  @Field(() => SessionWhereUniqueInput, { nullable: false })
  where!: SessionWhereUniqueInput;
}

export { SessionFindUniqueArgs };
