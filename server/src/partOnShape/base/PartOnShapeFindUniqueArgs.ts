import { ArgsType, Field } from "@nestjs/graphql";
import { PartOnShapeWhereUniqueInput } from "./PartOnShapeWhereUniqueInput";

@ArgsType()
class PartOnShapeFindUniqueArgs {
  @Field(() => PartOnShapeWhereUniqueInput, { nullable: false })
  where!: PartOnShapeWhereUniqueInput;
}

export { PartOnShapeFindUniqueArgs };
