import { ArgsType, Field } from "@nestjs/graphql";
import { QuoteItemWhereUniqueInput } from "./QuoteItemWhereUniqueInput";
import { QuoteItemUpdateInput } from "./QuoteItemUpdateInput";

@ArgsType()
class UpdateQuoteItemArgs {
  @Field(() => QuoteItemWhereUniqueInput, { nullable: false })
  where!: QuoteItemWhereUniqueInput;
  @Field(() => QuoteItemUpdateInput, { nullable: false })
  data!: QuoteItemUpdateInput;
}

export { UpdateQuoteItemArgs };
