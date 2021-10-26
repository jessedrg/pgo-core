import { ArgsType, Field } from "@nestjs/graphql";
import { QuoteWhereUniqueInput } from "./QuoteWhereUniqueInput";
import { QuoteUpdateInput } from "./QuoteUpdateInput";

@ArgsType()
class UpdateQuoteArgs {
  @Field(() => QuoteWhereUniqueInput, { nullable: false })
  where!: QuoteWhereUniqueInput;
  @Field(() => QuoteUpdateInput, { nullable: false })
  data!: QuoteUpdateInput;
}

export { UpdateQuoteArgs };
