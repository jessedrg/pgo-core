import { ArgsType, Field } from "@nestjs/graphql";
import { ProviderWhereUniqueInput } from "./ProviderWhereUniqueInput";

@ArgsType()
class ProviderFindUniqueArgs {
  @Field(() => ProviderWhereUniqueInput, { nullable: false })
  where!: ProviderWhereUniqueInput;
}

export { ProviderFindUniqueArgs };
