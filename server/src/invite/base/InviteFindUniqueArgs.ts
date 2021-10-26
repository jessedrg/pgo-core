import { ArgsType, Field } from "@nestjs/graphql";
import { InviteWhereUniqueInput } from "./InviteWhereUniqueInput";

@ArgsType()
class InviteFindUniqueArgs {
  @Field(() => InviteWhereUniqueInput, { nullable: false })
  where!: InviteWhereUniqueInput;
}

export { InviteFindUniqueArgs };
