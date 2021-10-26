import { ArgsType, Field } from "@nestjs/graphql";
import { ProviderWhereUniqueInput } from "./ProviderWhereUniqueInput";

@ArgsType()
class DeleteProviderArgs {
  @Field(() => ProviderWhereUniqueInput, { nullable: false })
  where!: ProviderWhereUniqueInput;
}

export { DeleteProviderArgs };
