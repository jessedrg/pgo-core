import { ArgsType, Field } from "@nestjs/graphql";
import { PartOnShapeCreateInput } from "./PartOnShapeCreateInput";

@ArgsType()
class CreatePartOnShapeArgs {
  @Field(() => PartOnShapeCreateInput, { nullable: false })
  data!: PartOnShapeCreateInput;
}

export { CreatePartOnShapeArgs };
