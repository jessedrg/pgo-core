import { ArgsType, Field } from "@nestjs/graphql";
import { AccountPaymentMethodWhereUniqueInput } from "./AccountPaymentMethodWhereUniqueInput";

@ArgsType()
class AccountPaymentMethodFindUniqueArgs {
  @Field(() => AccountPaymentMethodWhereUniqueInput, { nullable: false })
  where!: AccountPaymentMethodWhereUniqueInput;
}

export { AccountPaymentMethodFindUniqueArgs };
