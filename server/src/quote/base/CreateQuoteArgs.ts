import { ArgsType, Field } from "@nestjs/graphql";
import { QuoteCreateInput } from "./QuoteCreateInput";

@ArgsType()
class CreateQuoteArgs {
  @Field(() => QuoteCreateInput, { nullable: false })
  data!: QuoteCreateInput;
}

export { CreateQuoteArgs };
