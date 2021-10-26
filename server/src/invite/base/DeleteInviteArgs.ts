import { ArgsType, Field } from "@nestjs/graphql";
import { InviteWhereUniqueInput } from "./InviteWhereUniqueInput";

@ArgsType()
class DeleteInviteArgs {
  @Field(() => InviteWhereUniqueInput, { nullable: false })
  where!: InviteWhereUniqueInput;
}

export { DeleteInviteArgs };
