import { ArgsType, Field } from "@nestjs/graphql";
import { QuoteItemWhereUniqueInput } from "./QuoteItemWhereUniqueInput";

@ArgsType()
class QuoteItemFindUniqueArgs {
  @Field(() => QuoteItemWhereUniqueInput, { nullable: false })
  where!: QuoteItemWhereUniqueInput;
}

export { QuoteItemFindUniqueArgs };
