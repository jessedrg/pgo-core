import { ArgsType, Field } from "@nestjs/graphql";
import { MarginWhereUniqueInput } from "./MarginWhereUniqueInput";

@ArgsType()
class MarginFindUniqueArgs {
  @Field(() => MarginWhereUniqueInput, { nullable: false })
  where!: MarginWhereUniqueInput;
}

export { MarginFindUniqueArgs };
