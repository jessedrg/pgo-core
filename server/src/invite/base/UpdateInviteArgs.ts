import { ArgsType, Field } from "@nestjs/graphql";
import { InviteWhereUniqueInput } from "./InviteWhereUniqueInput";
import { InviteUpdateInput } from "./InviteUpdateInput";

@ArgsType()
class UpdateInviteArgs {
  @Field(() => InviteWhereUniqueInput, { nullable: false })
  where!: InviteWhereUniqueInput;
  @Field(() => InviteUpdateInput, { nullable: false })
  data!: InviteUpdateInput;
}

export { UpdateInviteArgs };
