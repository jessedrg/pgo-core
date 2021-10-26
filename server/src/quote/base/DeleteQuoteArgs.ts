import { ArgsType, Field } from "@nestjs/graphql";
import { QuoteWhereUniqueInput } from "./QuoteWhereUniqueInput";

@ArgsType()
class DeleteQuoteArgs {
  @Field(() => QuoteWhereUniqueInput, { nullable: false })
  where!: QuoteWhereUniqueInput;
}

export { DeleteQuoteArgs };
