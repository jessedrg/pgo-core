import { ArgsType, Field } from "@nestjs/graphql";
import { PaymentWhereUniqueInput } from "./PaymentWhereUniqueInput";

@ArgsType()
class PaymentFindUniqueArgs {
  @Field(() => PaymentWhereUniqueInput, { nullable: false })
  where!: PaymentWhereUniqueInput;
}

export { PaymentFindUniqueArgs };
