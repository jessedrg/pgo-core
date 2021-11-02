import { ArgsType, Field } from "@nestjs/graphql";
import { PriceWhereUniqueInput } from "./PriceWhereUniqueInput";
import { PriceUpdateInput } from "./PriceUpdateInput";

@ArgsType()
class UpdatePriceArgs {
  @Field(() => PriceWhereUniqueInput, { nullable: false })
  where!: PriceWhereUniqueInput;
  @Field(() => PriceUpdateInput, { nullable: false })
  data!: PriceUpdateInput;
}

export { UpdatePriceArgs };
