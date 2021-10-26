import { ArgsType, Field } from "@nestjs/graphql";
import { ProviderCreateInput } from "./ProviderCreateInput";

@ArgsType()
class CreateProviderArgs {
  @Field(() => ProviderCreateInput, { nullable: false })
  data!: ProviderCreateInput;
}

export { CreateProviderArgs };
