import { ArgsType, Field } from "@nestjs/graphql";
import { AccountCreateInput } from "./AccountCreateInput";

@ArgsType()
class CreateAccountArgs {
  @Field(() => AccountCreateInput, { nullable: false })
  data!: AccountCreateInput;
}

export { CreateAccountArgs };
