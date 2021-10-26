import { ArgsType, Field } from "@nestjs/graphql";
import { PartConfigurationWhereUniqueInput } from "./PartConfigurationWhereUniqueInput";
import { PartConfigurationUpdateInput } from "./PartConfigurationUpdateInput";

@ArgsType()
class UpdatePartConfigurationArgs {
  @Field(() => PartConfigurationWhereUniqueInput, { nullable: false })
  where!: PartConfigurationWhereUniqueInput;
  @Field(() => PartConfigurationUpdateInput, { nullable: false })
  data!: PartConfigurationUpdateInput;
}

export { UpdatePartConfigurationArgs };
