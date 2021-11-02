import { ArgsType, Field } from "@nestjs/graphql";
import { MarginCreateInput } from "./MarginCreateInput";

@ArgsType()
class CreateMarginArgs {
  @Field(() => MarginCreateInput, { nullable: false })
  data!: MarginCreateInput;
}

export { CreateMarginArgs };
