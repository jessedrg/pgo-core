import { ArgsType, Field } from "@nestjs/graphql";
import { SessionWhereUniqueInput } from "./SessionWhereUniqueInput";

@ArgsType()
class DeleteSessionArgs {
  @Field(() => SessionWhereUniqueInput, { nullable: false })
  where!: SessionWhereUniqueInput;
}

export { DeleteSessionArgs };
