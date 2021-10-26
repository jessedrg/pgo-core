import { ArgsType, Field } from "@nestjs/graphql";
import { PartMessageWhereUniqueInput } from "./PartMessageWhereUniqueInput";

@ArgsType()
class DeletePartMessageArgs {
  @Field(() => PartMessageWhereUniqueInput, { nullable: false })
  where!: PartMessageWhereUniqueInput;
}

export { DeletePartMessageArgs };
