import { ArgsType, Field } from "@nestjs/graphql";
import { SessionCreateInput } from "./SessionCreateInput";

@ArgsType()
class CreateSessionArgs {
  @Field(() => SessionCreateInput, { nullable: false })
  data!: SessionCreateInput;
}

export { CreateSessionArgs };
