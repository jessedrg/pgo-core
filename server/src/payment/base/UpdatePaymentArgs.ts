import { ArgsType, Field } from "@nestjs/graphql";
import { PaymentWhereUniqueInput } from "./PaymentWhereUniqueInput";
import { PaymentUpdateInput } from "./PaymentUpdateInput";

@ArgsType()
class UpdatePaymentArgs {
  @Field(() => PaymentWhereUniqueInput, { nullable: false })
  where!: PaymentWhereUniqueInput;
  @Field(() => PaymentUpdateInput, { nullable: false })
  data!: PaymentUpdateInput;
}

export { UpdatePaymentArgs };
