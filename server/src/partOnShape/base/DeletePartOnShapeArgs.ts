import { ArgsType, Field } from "@nestjs/graphql";
import { PartOnShapeWhereUniqueInput } from "./PartOnShapeWhereUniqueInput";

@ArgsType()
class DeletePartOnShapeArgs {
  @Field(() => PartOnShapeWhereUniqueInput, { nullable: false })
  where!: PartOnShapeWhereUniqueInput;
}

export { DeletePartOnShapeArgs };
