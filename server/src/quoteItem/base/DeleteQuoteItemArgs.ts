import { ArgsType, Field } from "@nestjs/graphql";
import { QuoteItemWhereUniqueInput } from "./QuoteItemWhereUniqueInput";

@ArgsType()
class DeleteQuoteItemArgs {
  @Field(() => QuoteItemWhereUniqueInput, { nullable: false })
  where!: QuoteItemWhereUniqueInput;
}

export { DeleteQuoteItemArgs };
