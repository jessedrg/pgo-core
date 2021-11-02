import { ArgsType, Field } from "@nestjs/graphql";
import { MarginWhereUniqueInput } from "./MarginWhereUniqueInput";
import { MarginUpdateInput } from "./MarginUpdateInput";

@ArgsType()
class UpdateMarginArgs {
  @Field(() => MarginWhereUniqueInput, { nullable: false })
  where!: MarginWhereUniqueInput;
  @Field(() => MarginUpdateInput, { nullable: false })
  data!: MarginUpdateInput;
}

export { UpdateMarginArgs };
