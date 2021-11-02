import { ArgsType, Field } from "@nestjs/graphql";
import { PriceCreateInput } from "./PriceCreateInput";

@ArgsType()
class CreatePriceArgs {
  @Field(() => PriceCreateInput, { nullable: false })
  data!: PriceCreateInput;
}

export { CreatePriceArgs };
