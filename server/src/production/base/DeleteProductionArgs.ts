import { ArgsType, Field } from "@nestjs/graphql";
import { ProductionWhereUniqueInput } from "./ProductionWhereUniqueInput";

@ArgsType()
class DeleteProductionArgs {
  @Field(() => ProductionWhereUniqueInput, { nullable: false })
  where!: ProductionWhereUniqueInput;
}

export { DeleteProductionArgs };
