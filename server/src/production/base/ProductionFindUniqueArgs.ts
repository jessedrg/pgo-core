import { ArgsType, Field } from "@nestjs/graphql";
import { ProductionWhereUniqueInput } from "./ProductionWhereUniqueInput";

@ArgsType()
class ProductionFindUniqueArgs {
  @Field(() => ProductionWhereUniqueInput, { nullable: false })
  where!: ProductionWhereUniqueInput;
}

export { ProductionFindUniqueArgs };
