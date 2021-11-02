import { ArgsType, Field } from "@nestjs/graphql";
import { PriceWhereUniqueInput } from "./PriceWhereUniqueInput";

@ArgsType()
class DeletePriceArgs {
  @Field(() => PriceWhereUniqueInput, { nullable: false })
  where!: PriceWhereUniqueInput;
}

export { DeletePriceArgs };
