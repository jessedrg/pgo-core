import { ArgsType, Field } from "@nestjs/graphql";
import { PartConfigurationCreateInput } from "./PartConfigurationCreateInput";

@ArgsType()
class CreatePartConfigurationArgs {
  @Field(() => PartConfigurationCreateInput, { nullable: false })
  data!: PartConfigurationCreateInput;
}

export { CreatePartConfigurationArgs };
