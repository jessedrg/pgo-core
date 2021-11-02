import { ArgsType, Field } from "@nestjs/graphql";
import { MarginWhereUniqueInput } from "./MarginWhereUniqueInput";

@ArgsType()
class DeleteMarginArgs {
  @Field(() => MarginWhereUniqueInput, { nullable: false })
  where!: MarginWhereUniqueInput;
}

export { DeleteMarginArgs };
