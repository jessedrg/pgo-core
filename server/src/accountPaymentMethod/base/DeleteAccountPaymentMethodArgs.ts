import { ArgsType, Field } from "@nestjs/graphql";
import { AccountPaymentMethodWhereUniqueInput } from "./AccountPaymentMethodWhereUniqueInput";

@ArgsType()
class DeleteAccountPaymentMethodArgs {
  @Field(() => AccountPaymentMethodWhereUniqueInput, { nullable: false })
  where!: AccountPaymentMethodWhereUniqueInput;
}

export { DeleteAccountPaymentMethodArgs };
