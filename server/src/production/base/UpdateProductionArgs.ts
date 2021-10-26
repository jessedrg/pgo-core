import { ArgsType, Field } from "@nestjs/graphql";
import { ProductionWhereUniqueInput } from "./ProductionWhereUniqueInput";
import { ProductionUpdateInput } from "./ProductionUpdateInput";

@ArgsType()
class UpdateProductionArgs {
  @Field(() => ProductionWhereUniqueInput, { nullable: false })
  where!: ProductionWhereUniqueInput;
  @Field(() => ProductionUpdateInput, { nullable: false })
  data!: ProductionUpdateInput;
}

export { UpdateProductionArgs };
