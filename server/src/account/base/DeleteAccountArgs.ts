import { ArgsType, Field } from "@nestjs/graphql";
import { AccountWhereUniqueInput } from "./AccountWhereUniqueInput";

@ArgsType()
class DeleteAccountArgs {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  where!: AccountWhereUniqueInput;
}

export { DeleteAccountArgs };
