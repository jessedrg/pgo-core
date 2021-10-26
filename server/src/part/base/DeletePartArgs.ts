import { ArgsType, Field } from "@nestjs/graphql";
import { PartWhereUniqueInput } from "./PartWhereUniqueInput";

@ArgsType()
class DeletePartArgs {
  @Field(() => PartWhereUniqueInput, { nullable: false })
  where!: PartWhereUniqueInput;
}

export { DeletePartArgs };
