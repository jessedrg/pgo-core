import { ArgsType, Field } from "@nestjs/graphql";
import { PartWhereUniqueInput } from "./PartWhereUniqueInput";
import { PartUpdateInput } from "./PartUpdateInput";

@ArgsType()
class UpdatePartArgs {
  @Field(() => PartWhereUniqueInput, { nullable: false })
  where!: PartWhereUniqueInput;
  @Field(() => PartUpdateInput, { nullable: false })
  data!: PartUpdateInput;
}

export { UpdatePartArgs };
