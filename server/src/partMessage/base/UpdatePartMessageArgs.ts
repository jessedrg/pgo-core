import { ArgsType, Field } from "@nestjs/graphql";
import { PartMessageWhereUniqueInput } from "./PartMessageWhereUniqueInput";
import { PartMessageUpdateInput } from "./PartMessageUpdateInput";

@ArgsType()
class UpdatePartMessageArgs {
  @Field(() => PartMessageWhereUniqueInput, { nullable: false })
  where!: PartMessageWhereUniqueInput;
  @Field(() => PartMessageUpdateInput, { nullable: false })
  data!: PartMessageUpdateInput;
}

export { UpdatePartMessageArgs };
