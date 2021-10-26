import { ArgsType, Field } from "@nestjs/graphql";
import { PartMessageCreateInput } from "./PartMessageCreateInput";

@ArgsType()
class CreatePartMessageArgs {
  @Field(() => PartMessageCreateInput, { nullable: false })
  data!: PartMessageCreateInput;
}

export { CreatePartMessageArgs };
