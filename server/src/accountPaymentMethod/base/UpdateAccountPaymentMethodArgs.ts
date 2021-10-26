import { ArgsType, Field } from "@nestjs/graphql";
import { AccountPaymentMethodWhereUniqueInput } from "./AccountPaymentMethodWhereUniqueInput";
import { AccountPaymentMethodUpdateInput } from "./AccountPaymentMethodUpdateInput";

@ArgsType()
class UpdateAccountPaymentMethodArgs {
  @Field(() => AccountPaymentMethodWhereUniqueInput, { nullable: false })
  where!: AccountPaymentMethodWhereUniqueInput;
  @Field(() => AccountPaymentMethodUpdateInput, { nullable: false })
  data!: AccountPaymentMethodUpdateInput;
}

export { UpdateAccountPaymentMethodArgs };
