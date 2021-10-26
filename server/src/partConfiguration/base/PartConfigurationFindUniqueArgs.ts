import { ArgsType, Field } from "@nestjs/graphql";
import { PartConfigurationWhereUniqueInput } from "./PartConfigurationWhereUniqueInput";

@ArgsType()
class PartConfigurationFindUniqueArgs {
  @Field(() => PartConfigurationWhereUniqueInput, { nullable: false })
  where!: PartConfigurationWhereUniqueInput;
}

export { PartConfigurationFindUniqueArgs };
