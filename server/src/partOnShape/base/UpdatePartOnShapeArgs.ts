import { ArgsType, Field } from "@nestjs/graphql";
import { PartOnShapeWhereUniqueInput } from "./PartOnShapeWhereUniqueInput";
import { PartOnShapeUpdateInput } from "./PartOnShapeUpdateInput";

@ArgsType()
class UpdatePartOnShapeArgs {
  @Field(() => PartOnShapeWhereUniqueInput, { nullable: false })
  where!: PartOnShapeWhereUniqueInput;
  @Field(() => PartOnShapeUpdateInput, { nullable: false })
  data!: PartOnShapeUpdateInput;
}

export { UpdatePartOnShapeArgs };
