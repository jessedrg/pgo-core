import { ArgsType, Field } from "@nestjs/graphql";
import { PartCreateInput } from "./PartCreateInput";

@ArgsType()
class CreatePartArgs {
  @Field(() => PartCreateInput, { nullable: false })
  data!: PartCreateInput;
}

export { CreatePartArgs };
