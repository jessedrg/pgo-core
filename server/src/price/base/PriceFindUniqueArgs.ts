import { ArgsType, Field } from "@nestjs/graphql";
import { PriceWhereUniqueInput } from "./PriceWhereUniqueInput";

@ArgsType()
class PriceFindUniqueArgs {
  @Field(() => PriceWhereUniqueInput, { nullable: false })
  where!: PriceWhereUniqueInput;
}

export { PriceFindUniqueArgs };
