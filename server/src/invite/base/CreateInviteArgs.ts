import { ArgsType, Field } from "@nestjs/graphql";
import { InviteCreateInput } from "./InviteCreateInput";

@ArgsType()
class CreateInviteArgs {
  @Field(() => InviteCreateInput, { nullable: false })
  data!: InviteCreateInput;
}

export { CreateInviteArgs };
