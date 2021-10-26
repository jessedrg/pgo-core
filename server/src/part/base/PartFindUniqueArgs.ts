import { ArgsType, Field } from "@nestjs/graphql";
import { PartWhereUniqueInput } from "./PartWhereUniqueInput";

@ArgsType()
class PartFindUniqueArgs {
  @Field(() => PartWhereUniqueInput, { nullable: false })
  where!: PartWhereUniqueInput;
}

export { PartFindUniqueArgs };
