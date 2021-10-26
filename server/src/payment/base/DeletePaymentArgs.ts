import { ArgsType, Field } from "@nestjs/graphql";
import { PaymentWhereUniqueInput } from "./PaymentWhereUniqueInput";

@ArgsType()
class DeletePaymentArgs {
  @Field(() => PaymentWhereUniqueInput, { nullable: false })
  where!: PaymentWhereUniqueInput;
}

export { DeletePaymentArgs };
