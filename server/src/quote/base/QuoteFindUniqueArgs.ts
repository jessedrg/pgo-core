import { ArgsType, Field } from "@nestjs/graphql";
import { QuoteWhereUniqueInput } from "./QuoteWhereUniqueInput";

@ArgsType()
class QuoteFindUniqueArgs {
  @Field(() => QuoteWhereUniqueInput, { nullable: false })
  where!: QuoteWhereUniqueInput;
}

export { QuoteFindUniqueArgs };
