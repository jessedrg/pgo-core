import { ArgsType, Field } from "@nestjs/graphql";
import { AccountPaymentMethodCreateInput } from "./AccountPaymentMethodCreateInput";

@ArgsType()
class CreateAccountPaymentMethodArgs {
  @Field(() => AccountPaymentMethodCreateInput, { nullable: false })
  data!: AccountPaymentMethodCreateInput;
}

export { CreateAccountPaymentMethodArgs };
