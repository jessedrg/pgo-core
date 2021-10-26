import { ArgsType, Field } from "@nestjs/graphql";
import { ProviderWhereUniqueInput } from "./ProviderWhereUniqueInput";
import { ProviderUpdateInput } from "./ProviderUpdateInput";

@ArgsType()
class UpdateProviderArgs {
  @Field(() => ProviderWhereUniqueInput, { nullable: false })
  where!: ProviderWhereUniqueInput;
  @Field(() => ProviderUpdateInput, { nullable: false })
  data!: ProviderUpdateInput;
}

export { UpdateProviderArgs };
