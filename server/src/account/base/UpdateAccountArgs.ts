import { ArgsType, Field } from "@nestjs/graphql";
import { AccountWhereUniqueInput } from "./AccountWhereUniqueInput";
import { AccountUpdateInput } from "./AccountUpdateInput";

@ArgsType()
class UpdateAccountArgs {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  where!: AccountWhereUniqueInput;
  @Field(() => AccountUpdateInput, { nullable: false })
  data!: AccountUpdateInput;
}

export { UpdateAccountArgs };
