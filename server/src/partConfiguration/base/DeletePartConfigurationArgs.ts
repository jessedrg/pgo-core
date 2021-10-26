import { ArgsType, Field } from "@nestjs/graphql";
import { PartConfigurationWhereUniqueInput } from "./PartConfigurationWhereUniqueInput";

@ArgsType()
class DeletePartConfigurationArgs {
  @Field(() => PartConfigurationWhereUniqueInput, { nullable: false })
  where!: PartConfigurationWhereUniqueInput;
}

export { DeletePartConfigurationArgs };
