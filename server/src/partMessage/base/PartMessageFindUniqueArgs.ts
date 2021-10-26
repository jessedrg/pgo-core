import { ArgsType, Field } from "@nestjs/graphql";
import { PartMessageWhereUniqueInput } from "./PartMessageWhereUniqueInput";

@ArgsType()
class PartMessageFindUniqueArgs {
  @Field(() => PartMessageWhereUniqueInput, { nullable: false })
  where!: PartMessageWhereUniqueInput;
}

export { PartMessageFindUniqueArgs };
