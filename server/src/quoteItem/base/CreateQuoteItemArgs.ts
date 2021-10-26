import { ArgsType, Field } from "@nestjs/graphql";
import { QuoteItemCreateInput } from "./QuoteItemCreateInput";

@ArgsType()
class CreateQuoteItemArgs {
  @Field(() => QuoteItemCreateInput, { nullable: false })
  data!: QuoteItemCreateInput;
}

export { CreateQuoteItemArgs };
