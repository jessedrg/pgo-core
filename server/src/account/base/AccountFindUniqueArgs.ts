import { ArgsType, Field } from "@nestjs/graphql";
import { AccountWhereUniqueInput } from "./AccountWhereUniqueInput";

@ArgsType()
class AccountFindUniqueArgs {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  where!: AccountWhereUniqueInput;
}

export { AccountFindUniqueArgs };
